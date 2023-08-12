import { MongoClient, Db, Collection } from 'mongodb';
import { MONGODB_URI, DB_NAME } from '$env/static/private';

if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const options = {};

class MongoConnection {
    private static clientInstance: MongoClient | null = null;
    private static clientPromise: Promise<MongoClient> | null = null;

    static getClientPromise(): Promise<MongoClient> {
        if (!this.clientPromise) {
            this.clientInstance = new MongoClient(MONGODB_URI, options);
            this.clientPromise = this.clientInstance.connect();
        }
        return this.clientPromise;
    }

    static async getClient(): Promise<MongoClient> {
        if (!this.clientInstance) {
            await this.getClientPromise();
        }
        return this.clientInstance!;
    }
}

/**
 * Connects to the MongoDB instance and returns the database.
 * @returns {Promise<Db>} The database.
 */
export async function getDatabase(): Promise<Db> {
    const client = await MongoConnection.getClient();
    return client.db(DB_NAME);
}

/**
 * Returns a collection from the database.
 * @param {string} name The name of the collection.
 * @returns {Promise<Collection<any>>} The collection.
 */
export async function getCollection(name: string): Promise<Collection<any>> {
    const db = await getDatabase();
    return db.collection(name);
}

export const clientPromise = MongoConnection.getClientPromise();

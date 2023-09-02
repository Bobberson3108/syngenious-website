import { MongoClient } from 'mongodb';
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
}

export const clientPromise = MongoConnection.getClientPromise();
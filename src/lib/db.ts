import { MongoClient } from "mongodb";

export const dbConnect = (collection: string) => {
    const uri = "";

    const client = new MongoClient(uri);
    const db = client.db("syngenious");
    const coll = db.collection(collection);

    return coll;
}
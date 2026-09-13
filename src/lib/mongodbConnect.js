import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export const connect = async (collection) => {
    await client.connect();
    const db = client.db("nextJSAuth");
    return db.collection(collection);
}
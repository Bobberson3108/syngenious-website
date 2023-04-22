import { ObjectId } from 'mongodb';
import { getCollection } from '$lib/db';

export default function MongoDBAdapter(){
  return {

    async createUser(user) {
      console.log("createUser")
      const usersCollection = await getCollection('users');
      await usersCollection.insertOne(user);
      return user;
    },

    async getUser(id) {
      console.log("getUser")
      const usersCollection = await getCollection('users');
      const user = await usersCollection.findOne({ _id: new ObjectId(id) });
      return user||null;
    },

    async getUserByEmail(email) {
      const usersCollection = await getCollection('users');
      const user = await usersCollection.findOne({ email });
      return user||null;
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const accountsCollection = await getCollection('accounts');
      const account = await accountsCollection.findOne({ providerAccountId, provider });
      if (!account) return null;

      const usersCollection = await getCollection('users');
      const user = await usersCollection.findOne({ _id: account.userId });
      return user||null;
    },

    async updateUser(user) {
      console.log("updateUser")
      const usersCollection = await getCollection('users');
      const { value } = await usersCollection.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { returnOriginal: false },
      );
      return value||null;
    },

    async deleteUser(id) {
      const userId = new ObjectId(id);
      const usersCollection = await getCollection('users');
      await usersCollection.deleteOne({ _id: userId });
      
      const accountsCollection = await getCollection('accounts');
      await accountsCollection.deleteMany({ userId: userId });

      const sessionsCollection = await getCollection('sessions');
      await sessionsCollection.deleteMany({ userId: userId });
    },

    async linkAccount(data) {
      const accountsCollection = await getCollection('accounts');
      const account = { ...data, userId: new ObjectId(data.userId) };
      await accountsCollection.insertOne(account);
      return account;
    },

    async unlinkAccount({ providerAccountId, provider }) {
      const accountsCollection = await getCollection('accounts');
      await accountsCollection.deleteOne({ providerAccountId, provider });
    },

    async createSession(session) {
      console.log("createSession")
      const sessionsCollection = await getCollection('sessions');
      console.log(session)
      await sessionsCollection.insertOne(session);
      return session;
    },

    async getSessionAndUser(sessionToken) {
      // console.log("getSessionAndUser")
      const sessionsCollection = await getCollection('sessions');
      const session = await sessionsCollection.findOne({ sessionToken });
      if (!session) return null;

      const usersCollection = await getCollection('users');
      const user = await usersCollection.findOne({ _id: session.userId });
      if (!user) return null;
      return { session, user };
    },

    async updateSession(session) {
      console.log("updateSession")
      const sessionsCollection = await getCollection('sessions');
      const { value } = await sessionsCollection.findOneAndUpdate(
           { sessionToken: session.sessionToken },
        { $set: session },
        { returnOriginal: false },
      );
      return value||null;
    },

    async deleteSession(sessionToken) {
      const sessionsCollection = await getCollection('sessions');
      console.log("session token: " + sessionToken)
      await sessionsCollection.findOneAndDelete({ sessionToken });
    },

    async createVerificationToken(verificationToken) {
      const verificationTokensCollection = await getCollection('verification_tokens');
      await verificationTokensCollection.insertOne(verificationToken);
      return verificationToken;
    },

    async useVerificationToken({ identifier, token }) {
      console.log("useVerificationToken")
      const verificationTokensCollection = await getCollection('verification_tokens');
      const { value } = await verificationTokensCollection.findOneAndDelete({ identifier, token });

      return  value||null;
    },
  };
}
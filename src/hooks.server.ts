import { SvelteKitAuth } from "@auth/sveltekit";
import { clientPromise } from '$lib/db';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Discord from '@auth/core/providers/discord';
import EmailProvider from '@auth/core/providers/email';

import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, GITHUB_ID, GITHUB_SECRET, SPOTIFY_ID, SPOTIFY_SECRET, EMAIL_SERVER, EMAIL_FROM} from '$env/static/private';

export const handle = SvelteKitAuth({
    providers: [
        EmailProvider({
            server: EMAIL_SERVER,
            from: EMAIL_FROM,
        }),
        Discord({
            clientId: DISCORD_CLIENT_ID,
            clientSecret: DISCORD_CLIENT_SECRET,
        }),
    ],
    adapter: MongoDBAdapter(clientPromise, {
        databaseName: 'syngenious'}),
    callbacks: {
        async session( { session, token, user} ) {
            return { ...session, user};
        }
    }
})
import { SvelteKitAuth } from "@auth/sveltekit";
import { clientPromise } from '$lib/db';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Discord from '@auth/core/providers/discord';
import EmailProvider from '@auth/core/providers/email';
import SpotifyProvider from '@auth/core/providers/spotify';

import { 
    DISCORD_ID, DISCORD_SECRET, 
    SPOTIFY_ID, SPOTIFY_SECRET,
    EMAIL_SERVER, EMAIL_FROM, 
} from '$env/static/private';

export const handle = SvelteKitAuth({
    providers: [
        EmailProvider({
            server: EMAIL_SERVER,
            from: EMAIL_FROM,
        }),
        Discord({
            clientId: DISCORD_ID,
            clientSecret: DISCORD_SECRET,
        }),
        SpotifyProvider({
            clientId: SPOTIFY_ID,
            clientSecret: SPOTIFY_SECRET,
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
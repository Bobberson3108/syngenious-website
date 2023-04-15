import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from '@auth/core/providers/discord';
import CredentialsProvider from '@auth/core/providers/credentials';
import dbAdapter from '$lib/dbAdapter';

import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
    providers: [
        Discord({
            clientId: DISCORD_CLIENT_ID,
            clientSecret: DISCORD_CLIENT_SECRET,
        }),
    ],
    adapter: dbAdapter(),
    callbacks: {
        async session( { session, token, user} ) {
            return { ...session, user};
        }
    }
})
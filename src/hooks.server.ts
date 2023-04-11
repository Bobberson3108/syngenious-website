import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from '@auth/core/providers/discord';
<<<<<<< HEAD
import { MongoClient } from 'mongodb';
=======
import CredentialsProvider from '@auth/core/providers/credentials';
>>>>>>> master
import dbAdapter from '$lib/dbAdapter';

import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
    providers: [
        Discord({
            clientId: DISCORD_CLIENT_ID,
            clientSecret: DISCORD_CLIENT_SECRET,
<<<<<<< HEAD
            scope: 'identify email'
=======
>>>>>>> master
        }),
    ],
    adapter: dbAdapter(),
})
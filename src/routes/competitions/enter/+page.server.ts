import type { Actions } from './$types';
import { getCollection } from '$lib/db';

 
export const actions = {
  default: async ( { locals, request }) => {
    console.log("RECIEVED REQUEST")
    console.log(await locals.getSession())

    
  }
} satisfies Actions;
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (( { parent } ) => {
    const { session } = parent;

    if (session.user) {
        throw redirect('/')
    }
})
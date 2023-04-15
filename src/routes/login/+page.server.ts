  import type { Load } from '@sveltejs/kit';
  import { redirect } from '@sveltejs/kit';
  
  export const load: Load = async ({ parent }) => {
    const { session } = await parent() || {};

    if (session?.user) {
      console.log("redirecting")
      throw redirect(302, '/');
    }
    return {};
  };
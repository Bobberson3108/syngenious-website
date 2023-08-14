import type { LayoutServerLoad } from './login/$types';

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.getSession()
  };
};
import { writable } from 'svelte/store';

const themeKey = 'dark-mode';

// Check if the user has a preferred theme setting
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem(themeKey);
    if (storedTheme) {
      console.log("storedTheme", storedTheme)
      return storedTheme;
    }
    if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log("system preference is light")
      return 'light';
    }
  }
  return 'dark';
};

export const theme = writable(getInitialTheme());

export function toggleTheme() {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    if (typeof document !== 'undefined') {
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        console.log('document.documentElement.classList', document.documentElement.classList)
    }
    localStorage.setItem(themeKey, newTheme);
    return newTheme;
  });
}
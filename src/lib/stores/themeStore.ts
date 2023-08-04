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
    localStorage.setItem(themeKey, newTheme);
    return newTheme;
  });
}

theme.subscribe((value) => {
  if (typeof document !== 'undefined') {
      console.log(value);
      if (value === 'dark') {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
  }
});
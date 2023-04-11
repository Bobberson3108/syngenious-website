import { writable } from 'svelte/store';

const themeKey = 'dark-mode';

// Check if the user has a preferred theme setting
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem(themeKey);
    if (storedTheme) {
      return storedTheme;
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
        location.reload();
    }
    localStorage.setItem(themeKey, newTheme);
    return newTheme;
  });
}
import { ref } from '@vue/reactivity';

export default function useThemeSwitcher() {
  const currentTheme = ref(localStorage.getItem('theme') || 'light');

  function toggleTheme() {
    if (currentTheme.value === 'dark') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }

  function setLightTheme() {
    currentTheme.value = 'light';
    updateTheme();
  }

  function setDarkTheme() {
    currentTheme.value = 'dark';
    updateTheme();
  }

  function updateTheme() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', currentTheme.value);
      document.body.classList.toggle('dark', currentTheme.value === 'dark');
    }
  }

  return {
    currentTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme
  };
}

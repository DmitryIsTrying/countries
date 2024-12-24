import { ThemeMode } from "@app";

export const checkThemeSettings = (): ThemeMode => {
  // 1. Проверяем localStorage
  const storedTheme = localStorage.getItem("theme") as ThemeMode | null;
  if (storedTheme) {
    return storedTheme;
  }

  // 2. Проверяем предпочтения пользователя
  const userPrefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (userPrefersDark) {
    return "dark";
  }

  const userPrefersLight =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (userPrefersLight) {
    return "light";
  }

  // 3. Возвращаем светлую тему
  return "light";
};

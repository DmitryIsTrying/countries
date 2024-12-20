export const changeTheme = (isLight: boolean) => {
  const root = document.getElementById("root");
  if (root) {
    if (isLight) {
      // Удаляем класс 'dark', если isLight === true
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // Добавляем класс 'dark', если isLight === false
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }
};

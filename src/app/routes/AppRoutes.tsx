import { createBrowserRouter } from "react-router-dom";
import App from "app/App";
import { CountriesPanel, CountryCard } from "features/CountryFind";
import { NotFoundPage } from "@shared/ui";

export const router = createBrowserRouter([
  {
    path: "/", // Основной путь
    element: <App />,
    children: [
      { path: ":countryName", element: <CountryCard /> }, // Страница для конкретной страны
      { path: "/", element: <CountriesPanel /> }, // Главная страница
      { path: "*", element: <NotFoundPage /> }, // Обработка несуществующих путей
    ],
  },
]);
//todo vercel

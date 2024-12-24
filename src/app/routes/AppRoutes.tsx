import { createHashRouter } from "react-router-dom";

import { CountriesPanel, CountryCard } from "@CountryFind";
import { NotFoundPage } from "@shared";
import App from "app/App";
//because gh pages
export const router = createHashRouter([
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

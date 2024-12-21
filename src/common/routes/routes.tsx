import { createBrowserRouter } from "react-router-dom";
import App from "UI/App";
import { CountriesPanel } from "UI/components/countriesPanel/CountriesPanel";
import { CountryCard } from "UI/components/countryCard/CountryCard";
export const router = createBrowserRouter([
  {
    path: "/", // Основной путь
    element: <App />,
    children: [
      { path: ":countryName", element: <CountryCard /> }, // Страница для конкретной страны
      { path: "/", element: <CountriesPanel /> }, // Главная страница
      { path: "*", element: <div>Error</div> }, // Обработка несуществующих путей
    ],
  },
]);
//todo vercel

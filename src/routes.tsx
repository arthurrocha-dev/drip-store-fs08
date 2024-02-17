import { MainLayout } from "./layouts/MainLayout"
import { HomePage } from "./pages/HomePage/HomePage"
import { RouteObject } from "react-router-dom"

export const ROUTES = {
    Home: '/',
    Products:'/produtos',
    Categorys: '/categorias',
    MyProducts:'/meus-produtos',
}

export default [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: ROUTES.Home,
            element: <HomePage />,
        },
        {
            path: ROUTES.Products,
            element: <HomePage />,
        },
        {
            path: ROUTES.Categorys,
            element: <HomePage />,
        },
        {
            path: ROUTES.MyProducts,
            element: <HomePage />,
        },
      ],
    },
  ] as RouteObject[];
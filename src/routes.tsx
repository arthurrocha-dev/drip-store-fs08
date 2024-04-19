import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage/HomePage'
import { RouteObject } from 'react-router-dom'
import { Products } from './pages/Products/Products'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { Product } from './pages/Product/Product'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { AccountRegistration } from './pages/AccountRegistration/Register'
import { PurchaseConfirmation } from './pages/PurchaseConfirmation/PurchaseConfirmation'

export const ROUTES = {
  Home: '/',
  Products: '/produtos',
  Categorys: '/categorias',
  MyProducts: '/meus-produtos',
  Cart: '/cart',
  LoginPage: '/loginpage',
  AccountRegistration: '/register',
  PurchaseConfirmation: '/confirmacao-de-compra'
}

export default [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.Home,
        element: <HomePage />,
      },
      {
        path: ROUTES.Products,
        element: <Products />,
      },
      {
        path: `${ROUTES.Products}/:id`,
        element: <Product />,
      },
      {
        path: ROUTES.Categorys,
        element: <HomePage />,
      },
      {
        path: ROUTES.MyProducts,
        element: <HomePage />,
      },
      {
        path: ROUTES.LoginPage,
        element: <LoginPage />,
      },
      {
        path: ROUTES.AccountRegistration,
        element: <AccountRegistration />,
      },
      {
        path: ROUTES.PurchaseConfirmation,
        element: <PurchaseConfirmation />,
      },
      
    ],
  },
] as RouteObject[]

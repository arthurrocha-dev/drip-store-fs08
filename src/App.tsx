import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ProductFilterProvider } from './hooks/useProductFilter'
import { ProductDataProvider } from './hooks/useProductData'
import { ShoppingCartProvider } from './hooks/useShoppingCart'

function App() {
  const router = createBrowserRouter(routes)

  return (
    <ShoppingCartProvider>
      <ProductFilterProvider>
        <ProductDataProvider>
          <SkeletonTheme
            baseColor="var(--color-light-gray-2"
            highlightColor="var(--color-light-gray-3)"
          >
            <RouterProvider router={router} />
          </SkeletonTheme>
        </ProductDataProvider>
      </ProductFilterProvider>
    </ShoppingCartProvider>
  )
}

export default App

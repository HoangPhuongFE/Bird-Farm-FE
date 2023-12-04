import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from 'components/layouts/Layout'
import ProtectedRoute from 'components/protected-route/ProtectedRoute'
import AboutScreen from 'features/about/AboutScreen'
import SignInScreen from 'features/auth/SignInScreen'
import SignUpScreen from 'features/auth/SignUpScreen'
import { userAtom } from 'features/auth/state'
import BlogScreen from 'features/blog/BlogScreen'
import CartScreen from 'features/cart/components/CartScreen'
import CompareScreen from 'features/compare/CompareScreen'
import ContactScreen from 'features/contact/ContactScreen'
import GraftingScreen from 'features/grafting/GraftingScreen'
import HomeScreen from 'features/home/HomeScreen'
import ProductDetailScreen from 'features/products/components/ProductDetailScreen'
import ProductScreen from 'features/products/components/ProductScreen'
import { useAtom } from 'jotai'
import { Route, Routes } from 'react-router-dom'

function App() {
  const currentUser = useAtom(userAtom)
  console.log(currentUser[0].isLogged)
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/sign-in" element={<SignInScreen />} />
            <Route path="/sign-up" element={<SignUpScreen />} />
            <Route path="/blog" element={<BlogScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/compare" element={<CompareScreen />} />
            <Route path="/grafting" element={<GraftingScreen />} />
            <Route path="/product" element={<ProductScreen />} />
            <Route
              path="/product-detail/:id"
              element={<ProductDetailScreen />}
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute isLoggedIn={currentUser[0].isLogged}>
                  <CartScreen />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App

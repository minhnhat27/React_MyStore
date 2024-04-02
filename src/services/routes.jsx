import { Route } from 'react-router-dom'
import { Fragment } from 'react'

import DefaultLayout from '../components/Layout/DefaultLayout'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'

export const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'News', to: '/news' },
  { name: 'Contact', to: '/contact' },
]

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/products/product-detail', component: ProductDetail },
]

export const privateRoutes = [{ path: '/cart', component: Cart }]

export const GenerateRoutes = (route) => {
  return route.map((route, index) => {
    const Page = route.component
    let Layout = DefaultLayout

    if (route.layout) {
      Layout = route.layout
    } else if (route.layout === null) {
      Layout = Fragment
    }
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    )
  })
}

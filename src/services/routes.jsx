import { Route } from 'react-router-dom'
import { Fragment } from 'react'

import DefaultLayout from '../components/Layout/DefaultLayout'
import HomeLayout from '../components/Layout/HomeLayout'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

export const publicRoutes = [
  { path: '/', component: Home, layout: HomeLayout },
  { path: '/home', component: Home, layout: HomeLayout },
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

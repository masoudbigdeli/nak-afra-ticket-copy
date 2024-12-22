import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useAuthenticateController from './hooks/use-authenticate-controller'
import useSyncCookieWithStore from './hooks/use-sync-cookie-with-store'
import useDirection from './hooks/use-direction'
import useRoutes from './hooks/use-routes'
import RouteModel from './models/route-model'
import FallbackLoading from './components/loading/fallback-loading'

const queryClient = new QueryClient()
const App: FC = () => {
  useAuthenticateController()
  useSyncCookieWithStore()
  useDirection()
  const routes: Array<RouteModel> = useRoutes()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {
          routes.map(({ path, layout: Layout, cmp: Cmp }: RouteModel) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<></>}>
                  <Layout>
                    <Cmp />
                  </Layout>
                </Suspense>
              }
            />
          ))
        }
      </Routes>
    </QueryClientProvider>
  )
}

export default App

import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useAuthenticateController from './hooks/use-authenticate-controller'
import useSyncCookieWithStore from './hooks/use-sync-cookie-with-store'
import useDirection from './hooks/use-direction'
import useRoutes from './hooks/use-routes'
import RouteModel from './models/route-model'
import FallbackLoading from './components/loading/fallback-loading'
import { useScrollRestoration } from './hooks/use-scroll-restoration'


const queryClient = new QueryClient()

export const scrollDataStorage: Record<string, number> = {}

const App: FC = () => {
  useAuthenticateController()
  useSyncCookieWithStore()
  useDirection()
  useScrollRestoration()
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
                <Suspense fallback={<FallbackLoading />}>
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

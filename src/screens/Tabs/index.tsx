import { Suspense, lazy, useState } from 'react'
import { Tab } from './components/Tab'
import { SkeletonList } from '../components/SkeletonList'

const UsersListLazy = lazy(() => import('./components/UsersList'))
const SalesListLazy = lazy(() => import('./components/SalesList'))

type TabsValues = 'users' | 'sales' | 'contact'

export function Tabs() {
  const [tabs, setTabs] = useState<TabsValues>('users')

  function handleChangeTabs(tab: TabsValues) {
    setTabs(tab)
  }

  return (
    <div className="mx-auto max-w-[400px] p-4">
      <div className="mb-5">
        <div className="flex gap-2">
          <Tab
            selected={tabs === 'users'}
            onSelect={() => handleChangeTabs('users')}
          >
            Usuários
          </Tab>
          <Tab
            selected={tabs === 'sales'}
            onSelect={() => handleChangeTabs('sales')}
          >
            Vendas
          </Tab>
          <Tab
            selected={tabs === 'contact'}
            onSelect={() => handleChangeTabs('contact')}
          >
            Contato
          </Tab>
        </div>

        {tabs === 'users' && (
          <div className="space-y-2">
            <p className="font-bold">Lista de usuários</p>

            <Suspense fallback={<SkeletonList />}>
              <UsersListLazy />
            </Suspense>
          </div>
        )}

        {tabs === 'sales' && (
          <div className="space-y-2">
            <p className="font-bold">Lista de vendas</p>

            <Suspense fallback={<SkeletonList />}>
              <SalesListLazy />
            </Suspense>
          </div>
        )}

        {tabs === 'contact' && (
          <div className="space-y-2">
            <p>Contato: (11) 94343-4343</p>
          </div>
        )}
      </div>
    </div>
  )
}

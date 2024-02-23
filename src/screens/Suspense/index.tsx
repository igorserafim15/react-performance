import { Suspense, lazy, useState } from 'react'
import { SkeletonList } from '../components/SkeletonList'
import { Button } from '@/components/ui/button'

const ListLazy = lazy(() => import('./components/List'))

export function SuspenseScreen() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto max-w-[400px] p-4 space-y-2">
      {!open && <Button onClick={() => setOpen(true)}>Mostrar produtos</Button>}

      {open && (
        <>
          <p>Lista de produtos</p>

          <Suspense fallback={<SkeletonList />}>
            <ListLazy />
          </Suspense>
        </>
      )}
    </div>
  )
}

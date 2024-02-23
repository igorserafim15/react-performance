import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEvent, useCallback, useState, useTransition } from 'react'
import { SkeletonList } from '../components/SkeletonList'
import { Product } from '../components/Product'
import { ReloadIcon } from '@radix-ui/react-icons'

export function ListsScreen() {
  const data = Array.from({ length: 10000 }).map((_, index) => ({
    id: index,
    label: `Produto ${index}`,
    selected: false,
  }))

  const [productsData, setProductsData] = useState(data)

  const [searchValue, setSearchValue] = useState('')
  const [isPending, startTransition] = useTransition()

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    startTransition(() => {
      setSearchValue(ev.target.value)
    })
  }

  function handleProductsFiltered(value: string) {
    const filtered = productsData.filter((item) => {
      return item.label.includes(value)
    })

    return value.length ? filtered : productsData
  }

  const handleSelectProduct = useCallback((productId: number) => {
    setProductsData((prevProductsData) => {
      const selecting = prevProductsData.map((item) => {
        if (item.id === productId) {
          return { ...item, selected: !item.selected }
        }

        return item
      })

      return selecting
    })
  }, [])

  const products = handleProductsFiltered(searchValue)

  return (
    <div className="mx-auto max-w-[400px] p-4">
      <div className="mb-5">
        <Label className="flex gap-1 h-7 items-center">
          Pesquisar produto
          {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
        </Label>
        <Input
          placeholder="Pesquisar..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        {isPending && <SkeletonList />}

        {products.map((item) => (
          <Product key={item.id} data={item} onSelect={handleSelectProduct} />
        ))}
      </div>
    </div>
  )
}

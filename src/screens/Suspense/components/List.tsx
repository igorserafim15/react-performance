import { ListProducts } from '@/screens/components/ListProducts'

export default function List() {
  const data = Array.from({ length: 20000 }).map(
    (_, index) => `Produto ${index}`,
  )

  return <ListProducts products={data} />
}

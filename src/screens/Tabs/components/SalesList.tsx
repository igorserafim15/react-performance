import { ItemList } from './ItemList'

export default function SalesList() {
  const data = Array.from({ length: 15000 }).map((_, index) => `Venda ${index}`)

  return (
    <>
      {data.map((item) => (
        <ItemList key={item} label={item} />
      ))}
    </>
  )
}

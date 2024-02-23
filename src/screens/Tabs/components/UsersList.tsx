import { ItemList } from './ItemList'

export default function UsersList() {
  const data = Array.from({ length: 30000 }).map(
    (_, index) => `Usuário ${index}`,
  )

  return (
    <>
      {data.map((item) => (
        <ItemList key={item} label={item} />
      ))}
    </>
  )
}

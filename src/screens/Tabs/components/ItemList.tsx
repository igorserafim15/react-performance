import React from 'react'

type ItemListProps = { label: string }

function _ItemList({ label }: ItemListProps) {
  return (
    <div className="p-3 bg-zinc-100 rounded-lg">
      <p>{label}</p>
    </div>
  )
}

export const ItemList = React.memo(_ItemList)

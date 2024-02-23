import clsx from 'clsx'
import React from 'react'

export type ProductValues = {
  id: number
  label: string
  selected: boolean
}

type ProductProps = {
  data: ProductValues
  onSelect: (productId: number) => void
}

function _Product({ data, onSelect }: ProductProps) {
  return (
    <button
      onClick={() => onSelect(data.id)}
      className={clsx('p-3 block w-full bg-zinc-100 rounded-lg', {
        'bg-zinc-300': data.selected,
      })}
    >
      <p>{data.label}</p>
    </button>
  )
}

export const Product = React.memo(_Product)

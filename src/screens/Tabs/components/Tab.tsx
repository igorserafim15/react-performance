import { ReloadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { ReactNode, useTransition } from 'react'

interface TabProps {
  children: ReactNode
  selected: boolean
  onSelect: () => void
}

export function Tab({ children, onSelect, selected }: TabProps) {
  const [isPending, startTransition] = useTransition()

  function handleChengeTab() {
    startTransition(() => {
      onSelect()
    })
  }

  return (
    <button
      className={clsx(
        'py-2 px-4 bg-zinc-50 rounded-lg disabled:opacity-50 flex items-center justify-center gap-1 min-w-[100px]',
        {
          'bg-zinc-200': selected,
        },
      )}
      disabled={isPending}
      onClick={handleChengeTab}
    >
      {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {!isPending && children}
    </button>
  )
}

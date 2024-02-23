import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonList() {
  const skeletons = Array.from({ length: 10 }).map((_, index) => index)

  return (
    <div className="space-y-2 min-h-screen">
      {skeletons.map((skeleton) => (
        <div key={skeleton} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  )
}

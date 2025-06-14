import { PenToolIcon } from 'lucide-react'

export default function Counter() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-20 px-4 pt-10 text-center lg:mt-30">
      <h1 className="font-bold text-3xl">Counter</h1>

      <div className="flex w-full flex-col items-center gap-10 px-2 lg:w-auto">
        <h1 className="font-bold text-4xl">EM DESENVOLVIMENTO</h1>

        <PenToolIcon className="size-52 text-yellow-300" />
      </div>
    </div>
  )
}

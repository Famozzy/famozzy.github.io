import { useAtomValue } from 'jotai'
import { ioStreamsAtom } from '@/app/store'

const Terminal = () => {
  const ioStreams = useAtomValue(ioStreamsAtom)

  const clickHandle = (ev: React.MouseEvent<HTMLDivElement>) => {
    const commandInput = ev.currentTarget.querySelector('input:not([disabled])') as HTMLInputElement
    commandInput.focus()
  }

  return (
    <div
      onClick={clickHandle}
      className="w-full text-sm bg-tn-background border-2 border-tn-fg-gutter p-1.5 max-w-3xl h-96 overflow-y-auto"
    >
      {ioStreams.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </div>
  )
}

export default Terminal

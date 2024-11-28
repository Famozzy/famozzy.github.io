import { ioStreamsAtom } from '@/app/store'
import { Contact, Help, NotFound, Powerlevel, Projects, WhoAmI } from '@/components'
import { useSetAtom } from 'jotai'

type Command = {
  [key: string]: React.ReactNode
}

const commands: Command = {
  help: <Help />,
  whoami: <WhoAmI />,
  projects: <Projects />,
  contact: <Contact />
}

export const CommandInput = () => {
  const setIoStreams = useSetAtom(ioStreamsAtom)

  const onKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key !== 'Enter') return

    const command = ev.currentTarget.value

    if (command === 'clear') {
      setIoStreams(() => [<CommandInput key={crypto.randomUUID()} />])
      return
    }

    const output = commands[command] || NotFound({ command })
    setIoStreams(prev => [...prev, output, <CommandInput />])
    ev.currentTarget.setAttribute('disabled', 'true')
  }

  return (
    <>
      <Powerlevel />
      <input className="w-1/3" onKeyDown={onKeyPress} type="text" autoFocus aria-label="cmd-input" />
    </>
  )
}

export default CommandInput

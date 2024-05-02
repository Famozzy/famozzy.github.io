import React from 'react'
import { atom } from 'jotai'
import { CommandInput } from '@/components'

const ioStreamsAtom = atom<React.ReactNode[]>([<CommandInput />])

export default ioStreamsAtom

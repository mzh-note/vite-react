import { create } from 'zustand/react'

type VoidFunction = () => void
type VoidFn = (val: { status: boolean }) => void

interface IUseStore {
  time: number
  status: boolean
  setTime: VoidFunction
  setStatus: VoidFn
}
const useStore = create<IUseStore>((set) => ({
  time: 0,
  status: false,
  setTime: () => set((state) => ({ time: state.time + 1 })),
  setStatus: (val) => {
    set(() => ({ status: val.status }))
  },
}))

export default useStore

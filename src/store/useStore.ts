import { create } from 'zustand/react'

interface IState {
  time: number
}

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
  setTime: () => set((state: IState) => ({ time: state.time + 1 })),
  setStatus: (val: { status: boolean }) => {
    console.log(val)
    set(() => ({ status: val.status }))
  },
}))

export default useStore

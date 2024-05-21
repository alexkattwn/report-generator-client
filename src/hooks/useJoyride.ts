import { create } from 'zustand'

interface JoyrideStore {
    run: boolean
    setRun: (state: boolean) => void
}

const useJoyride = create<JoyrideStore>((set) => ({
    run: false,
    setRun: (state) => {
        if (state) {
            set({ run: state })
        }
    },
}))

export default useJoyride

import { create } from 'zustand'

type ViewType = 'list' | 'plate'

interface ViewHistoryStore {
    view: ViewType
    setView: (view: ViewType) => void
}

const useViewHistory = create<ViewHistoryStore>((set) => ({
    view: 'list',
    setView: (view) => {
        if (view === 'list') {
            set({ view: 'list' })
        } else {
            set({ view: 'plate' })
        }
    },
}))

export default useViewHistory

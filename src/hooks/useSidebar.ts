import { create } from 'zustand'

import {
    getCurrentReportFromSessionStorage,
    setCurrentReportToSessionStorage,
} from '@/helpers/sessionStorage.helper'

interface SidebarStore {
    isOpen: boolean
    selectedReport: string
    setIsOpen: (state: boolean) => void
    setSelectedReport: (report: string) => void
}

const useSidebar = create<SidebarStore>((set) => ({
    isOpen: false,
    selectedReport: getCurrentReportFromSessionStorage(),
    setIsOpen: (state) => set({ isOpen: state }),
    setSelectedReport: (report) => {
        set({ selectedReport: report })
        setCurrentReportToSessionStorage(report)
    },
}))

export default useSidebar

import { create } from 'zustand'

import {
    getCurrentReportFromSessionStorage,
    setCurrentReportToSessionStorage,
} from '@/helpers/sessionStorage.helper'
import {
    getSidebarFromLocalStorage,
    setSidebarToLocalStorage,
} from '@/helpers/localStorage.helper'

interface SidebarStore {
    isOpen: boolean
    selectedReport: string
    setIsOpen: (state: boolean) => void
    setSelectedReport: (report: string) => void
}

const useSidebar = create<SidebarStore>((set) => ({
    isOpen: getSidebarFromLocalStorage(),
    selectedReport: getCurrentReportFromSessionStorage(),
    setIsOpen: (state) => {
        setSidebarToLocalStorage(state)
        set({ isOpen: state })
    },
    setSelectedReport: (report) => {
        set({ selectedReport: report })
        setCurrentReportToSessionStorage(report)
    },
}))

export default useSidebar

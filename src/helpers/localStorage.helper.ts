export function setSidebarToLocalStorage(isOpen: boolean): void {
    localStorage.setItem('sidebar', JSON.stringify(isOpen))
}

export function getSidebarFromLocalStorage(): boolean {
    const data = localStorage.getItem('sidebar')
    return data ? Boolean(JSON.parse(data)) : false
}

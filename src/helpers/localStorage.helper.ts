export function setSidebarToLocalStorage(isOpen: boolean): void {
    localStorage.setItem('sidebar', JSON.stringify(isOpen))
}

export function getSidebarFromLocalStorage(): boolean {
    const data = localStorage.getItem('sidebar')
    return data ? Boolean(JSON.parse(data)) : false
}

export function setTokenToLocalStorage(token: string): void {
    localStorage.setItem('token', JSON.stringify(token))
}

export function getTokenFromLocalStorage(): string | null {
    const data = localStorage.getItem('token')
    return data ? JSON.parse(data) : null
}

export function removeTokenFromLocalStorage(): void {
    localStorage.removeItem('token')
}

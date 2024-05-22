export function formatDateAndTime(isoString: string): string {
    const dateObject = new Date(isoString)

    const year = dateObject.getFullYear()
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
    const day = dateObject.getDate().toString().padStart(2, '0')

    const hours = dateObject.getHours().toString().padStart(2, '0')
    const minutes = dateObject.getMinutes().toString().padStart(2, '0')

    const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}`

    return formattedDateTime
}

export function formatSize(size: number): string {
    if (size > 1024 * 1024 * 1024) {
        return (size / (1024 * 1024 * 1024)).toFixed(2) + ' Gb'
    }
    if (size > 1024 * 1024) {
        return (size / (1024 * 1024)).toFixed(2) + ' Mb'
    }
    if (size > 1024) {
        return (size / 1024).toFixed(2) + ' Kb'
    }
    return size + ' B'
}

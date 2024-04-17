export const getWindowWidth = () => {
    const { innerWidth: windowWidth } =
        typeof window !== 'undefined' ? window : { innerWidth: 0 }

    return { windowWidth }
}

export function removeEmptyFields(
    obj: Record<string, any>
): Record<string, any> {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (
                obj[key] === '' ||
                obj[key] === null ||
                obj[key] === undefined
            ) {
                delete obj[key]
            }
        }
    }
    return obj
}

export const createFIO = (surname: string, name: string, patronymic: string) =>
    `${surname} ${name[0]}. ${patronymic[0]}.`

export function formatDate(inputDate: string): string {
    const date = new Date(inputDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    return `${formattedDay}.${formattedMonth}.${year}`
}

export function formatDateAndTime(isoString: string): string {
    const dateObject = new Date(isoString)

    if (isNaN(dateObject.getTime())) {
        return '-'
    }

    const year = dateObject.getFullYear()
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0')
    const day = dateObject.getDate().toString().padStart(2, '0')

    const hours = dateObject.getHours().toString().padStart(2, '0')
    const minutes = dateObject.getMinutes().toString().padStart(2, '0')

    const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}`

    return formattedDateTime
}

export function findSimilarObjects(array: any[], query: string): any[] {
    if (!query) {
        return array
    }

    function levenshteinDistance(a: string, b: string): number {
        const distanceMatrix: number[][] = Array.from(
            Array(b.length + 1),
            (_, i) => [i]
        )
        for (let i = 0; i < a.length; i++) {
            distanceMatrix[0][i + 1] = i + 1
        }
        for (let i = 0; i < b.length; i++) {
            for (let j = 0; j < a.length; j++) {
                if (a[j] === b[i]) {
                    distanceMatrix[i + 1][j + 1] = distanceMatrix[i][j]
                } else {
                    distanceMatrix[i + 1][j + 1] = Math.min(
                        distanceMatrix[i][j + 1] + 1,
                        distanceMatrix[i + 1][j] + 1,
                        distanceMatrix[i][j] + 1
                    )
                }
            }
        }
        return distanceMatrix[b.length][a.length]
    }

    const similarObjects: any[] = array.filter((obj) => {
        const distance: number = levenshteinDistance(
            obj.name.toLowerCase(),
            query.toLowerCase()
        )
        return distance <= Math.ceil(query.length / 3)
    })

    return similarObjects
}

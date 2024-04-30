import { IParametersCD } from '@/types/common'

export function getCurrentReportFromSessionStorage(): string {
    const data = sessionStorage.getItem('report')
    const report: string = data ? JSON.parse(data) : ''
    return report
}

export function setCurrentReportToSessionStorage(report: string): void {
    sessionStorage.setItem('report', JSON.stringify(report))
}

export function removeCurrentReportFromSessionStorage(): void {
    sessionStorage.removeItem('report')
}

export function setPersonToSessionStorage(person: string): void {
    sessionStorage.setItem('person', JSON.stringify(person))
}

export function getPersonFromSessionStorage(): string {
    const data = sessionStorage.getItem('person')
    const person: string = data ? JSON.parse(data) : ''
    return person
}

export function setParametersCDToSessionStorage(
    parameters: IParametersCD
): void {
    sessionStorage.setItem('parametersCD', JSON.stringify(parameters))
}

export function removeParametersCDFromSessionStorage(): void {
    sessionStorage.removeItem('parametersCD')
}

export function getParametersCDFromSessionStorage(): IParametersCD | undefined {
    const data = sessionStorage.getItem('parametersCD')
    return data ? JSON.parse(data) : undefined
}

import { describe, it, expect } from 'vitest'

import { formatDateAndTime } from '@/utils/common'

describe('formatDateAndTime', () => {
    it('Корректное форматирование ISO', () => {
        const isoString = '2023-05-23T14:45:00Z'
        const result = formatDateAndTime(isoString)
        expect(result).toBe('23.05.2023 14:45')
    })

    it('Обработка недействительной даты', () => {
        const invalidString = 'invalid-date'
        const result = formatDateAndTime(invalidString)
        expect(result).toBe('-')
    })

    it('Обработка даты с недопустимым форматом', () => {
        const invalidFormatString = '2023-13-40T25:61:00Z'
        const result = formatDateAndTime(invalidFormatString)
        expect(result).toBe('-')
    })

    it('Корректное форматирование ISO со временем', () => {
        const isoStringWithTime = '2023-12-01T09:05:00Z'
        const result = formatDateAndTime(isoStringWithTime)
        expect(result).toBe('01.12.2023 09:05')
    })

    it('Корректная обработка дат високосного года', () => {
        const leapYearString = '2024-02-29T12:00:00Z'
        const result = formatDateAndTime(leapYearString)
        expect(result).toBe('29.02.2024 12:00')
    })

    it('Корректная обработка дат в различных временных зонах', () => {
        const timezoneString = '2023-05-23T14:45:00+03:00'
        const result = formatDateAndTime(timezoneString)
        expect(result).toBe('23.05.2023 11:45')
    })
})

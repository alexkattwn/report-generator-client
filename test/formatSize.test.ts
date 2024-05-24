import { describe, it, expect } from 'vitest'

import { formatSize } from '@/utils/formats'

describe('formatSize', () => {
    it('Форматирование размера в байтах', () => {
        const size = 500
        const result = formatSize(size)
        expect(result).toBe('500 B')
    })

    it('Форматирование размера в килобайтах', () => {
        const size = 2048
        const result = formatSize(size)
        expect(result).toBe('2.00 Kb')
    })

    it('Форматирование размера в мегабайтах', () => {
        const size = 5 * 1024 * 1024
        const result = formatSize(size)
        expect(result).toBe('5.00 Mb')
    })

    it('Форматирование размера в гигабайтах', () => {
        const size = 3 * 1024 * 1024 * 1024
        const result = formatSize(size)
        expect(result).toBe('3.00 Gb')
    })

    it('Форматирование размера чуть меньше 1 Кб', () => {
        const size = 1023
        const result = formatSize(size)
        expect(result).toBe('1023 B')
    })

    it('Форматирование размера чуть меньше 1 Мб', () => {
        const size = 1024 * 1024 - 1
        const result = formatSize(size)
        expect(result).toBe('1024.00 Kb')
    })

    it('Форматирование размера чуть меньше 1 Гб', () => {
        const size = 1024 * 1024 * 1024 - 1
        const result = formatSize(size)
        expect(result).toBe('1024.00 Mb')
    })

    it('Обработка нуля', () => {
        const size = 0
        const result = formatSize(size)
        expect(result).toBe('0 B')
    })
})

import { describe, expect, it } from 'vitest'
import { prisma } from './prisma'

describe('Database', () => {
  it('should be up and running', async () => {
    const result: Record<string, number>[] = await prisma.$queryRaw`SELECT 1`
    // const result = await prisma.$queryRaw < { string: number }[]> `SELECT 1`
    console.log('RESULT  - - -', result)
    expect(result.length).toBe(1)
  })
})

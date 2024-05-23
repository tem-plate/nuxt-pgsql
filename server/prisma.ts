import { env } from 'node:process'
import { PrismaClient } from '@prisma/client'

function prismaClientSingleton() {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
// eslint-disable-next-line no-restricted-globals
} & typeof global

export const $prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (env.NODE_ENV !== 'production')
  globalThis.prismaGlobal = $prisma

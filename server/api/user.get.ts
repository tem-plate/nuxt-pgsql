import { $prisma } from '../prisma'

export default defineEventHandler(async () => {
  const user = await $prisma.user.findMany()
  return user
})

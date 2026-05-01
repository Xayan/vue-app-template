import { useQuery } from '@tanstack/vue-query'

export interface User {
  id: number
  name: string
  email: string
}

export interface UserWithAvatar extends User {
  avatar: string
}

/**
 * Fetch a user by ID with generated avatar
 * Example composable for TanStack Query integration
 */
export function useUser(userId: number) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      if (!response.ok) throw new Error('Failed to fetch user')
      const user = (await response.json()) as User
      return {
        ...user,
        avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`,
      } as UserWithAvatar
    },
    enabled: userId > 0,
  })
}

/**
 * Fetch all users with generated avatars
 * Example composable for TanStack Query integration
 */
export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) throw new Error('Failed to fetch users')
      const users = (await response.json()) as User[]
      return users.map(user => ({
        ...user,
        avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`,
      })) as UserWithAvatar[]
    },
  })
}

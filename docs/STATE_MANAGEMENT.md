# State Management & Data Fetching

This project includes **Pinia** for state management and **TanStack Query** for server state management and caching.

## Pinia (State Management)

Pinia is used for client-side state that doesn't come from an API (UI state, user preferences, etc.).

### Creating a Store

Stores are located in `src/stores/` and use the **Composition API** style:

```typescript
// src/stores/counter.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return { count, increment }
})
```

### Using a Store in Components

```vue
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
  </div>
</template>
```

### Best Practices

- Use Pinia for **UI state** (modals, filters, theme, sidebar visibility)
- Use Pinia for **user data** that needs to persist across navigation
- Don't use Pinia for API data — use **TanStack Query** instead

## TanStack Query (Server State Management)

TanStack Query manages asynchronous server state, automatic caching, and synchronization.

### Creating a Query Composable

Query composables are located in `src/composables/` and follow naming convention `use<Resource>`:

```typescript
// src/composables/usePosts.ts
import { useQuery } from '@tanstack/vue-query'

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('https://api.example.com/posts')
      if (!response.ok) throw new Error('Failed to fetch posts')
      return response.json()
    },
  })
}
```

### Using a Query in Components

```vue
<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'

const { data, isPending, error } = usePosts()
</script>

<template>
  <div>
    <div v-if="isPending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <ul v-else>
      <li v-for="post in data" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
```

### Query Options

Key options for `useQuery`:

```typescript
useQuery({
  queryKey: ['users', userId],        // Unique cache key (can be array)
  queryFn: async () => {...},         // Function that returns data or throws error
  enabled: userId > 0,                // Disable query conditionally
  staleTime: 5 * 60 * 1000,          // Data considered fresh for 5 minutes
  gcTime: 10 * 60 * 1000,            // Cache garbage collected after 10 minutes
  retry: 1,                           // Retry failed requests once
  refetchOnWindowFocus: true,         // Refetch when window regains focus
})
```

### Mutations (Create/Update/Delete)

```typescript
import { useMutation } from '@tanstack/vue-query'

export function useCreatePost() {
  return useMutation({
    mutationFn: async (postData) => {
      const response = await fetch('https://api.example.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
      })
      return response.json()
    },
  })
}
```

Usage:

```vue
<script setup lang="ts">
import { useCreatePost } from '@/composables/usePosts'

const createPost = useCreatePost()

async function handleSubmit() {
  await createPost.mutateAsync({ title: 'New Post' })
}
</script>

<template>
  <button @click="handleSubmit" :disabled="createPost.isPending">
    {{ createPost.isPending ? 'Creating...' : 'Create Post' }}
  </button>
</template>
```

## When to Use Each

| Use Case | Solution |
|----------|----------|
| API data (posts, users, etc.) | TanStack Query |
| UI state (modals, sidebar open) | Pinia |
| User preferences that persist | Pinia |
| Temporary form state | Component ref |
| Caching, refetching, sync across tabs | TanStack Query |

## DevTools

### Pinia DevTools

Pinia integrates with Vue DevTools. Inspect and time-travel through state changes.

### TanStack Query DevTools

Add to your app for debugging:

```typescript
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

app.use(VueQueryDevtools)
```

Then access at `http://localhost:5173/__tq_devtools`.

## Examples

See `src/stores/counter.ts` for a Pinia store example.

See `src/composables/useUsers.ts` for a TanStack Query example (uses JSONPlaceholder API).

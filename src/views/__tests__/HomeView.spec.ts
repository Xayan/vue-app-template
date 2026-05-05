import HomeView from '@/views/HomeView.vue'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, expect, it } from 'vitest'

describe('HomeView.vue', () => {
  it('renders and contains counter button', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createPinia()],
      },
    })

    expect(wrapper.text()).toContain('Count is')
  })

  it('increments count on button click', async () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createPinia()],
      },
    })

    const button = wrapper.findAll('button').find(btn => btn.text().includes('Count is'))
    expect(button).toBeDefined()

    await button!.trigger('click')
    expect(wrapper.text()).toContain('Count is 1')
  })

  it('renders documentation links', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createPinia()],
      },
    })

    const docs = wrapper.find('#docs')
    expect(docs.exists()).toBe(true)

    const links = docs.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })
})

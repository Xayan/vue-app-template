import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomeView from '../HomeView.vue'

describe('HomeView.vue', () => {
  it('renders and contains counter button', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.text()).toContain('Count is')
  })

  it('increments count on button click', async () => {
    const wrapper = mount(HomeView)

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)

    await button.trigger('click')
    expect(wrapper.text()).toContain('Count is 1')
  })

  it('renders documentation links', () => {
    const wrapper = mount(HomeView)

    const docs = wrapper.find('#docs')
    expect(docs.exists()).toBe(true)

    const links = docs.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })
})

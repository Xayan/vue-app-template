import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders and contains counter button', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toContain('Count is')
  })

  it('increments count on button click', async () => {
    const wrapper = mount(HelloWorld)
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    await button.trigger('click')
    expect(wrapper.text()).toContain('Count is 1')
  })
})

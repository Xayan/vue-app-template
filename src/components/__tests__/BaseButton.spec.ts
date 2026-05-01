import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseButton from '../BaseButton.vue'

describe('BaseButton.vue', () => {
  it('renders button with default props', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me',
      },
    })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.find('button').attributes('type')).toBe('button')
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
  })

  it('renders button with custom slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: '<span class="custom">Custom Content</span>',
      },
    })

    expect(wrapper.find('span.custom').exists()).toBe(true)
    expect(wrapper.find('span.custom').text()).toBe('Custom Content')
  })

  describe('Variants', () => {
    it('applies primary variant classes (default)', () => {
      const wrapper = mount(BaseButton)
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('gradient-to-r')
      expect(buttonClass).toContain('purple')
      expect(buttonClass).toContain('pink')
    })

    it('applies secondary variant classes', () => {
      const wrapper = mount(BaseButton, {
        props: { variant: 'secondary' },
      })
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('bg-slate-800')
      expect(buttonClass).toContain('text-slate-100')
      expect(buttonClass).toContain('border')
      expect(buttonClass).toContain('slate-700')
    })

    it('applies danger variant classes', () => {
      const wrapper = mount(BaseButton, {
        props: { variant: 'danger' },
      })
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('bg-red-700')
      expect(buttonClass).toContain('text-white')
    })

    it('applies ghost variant classes', () => {
      const wrapper = mount(BaseButton, {
        props: { variant: 'ghost' },
      })
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('text-slate-400')
      expect(buttonClass).toContain('hover:text-slate-100')
    })
  })

  describe('Sizes', () => {
    it('applies small size classes', () => {
      const wrapper = mount(BaseButton, {
        props: { size: 'sm' },
      })
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('px-3')
      expect(buttonClass).toContain('py-1.5')
      expect(buttonClass).toContain('text-sm')
    })

    it('applies medium size classes (default)', () => {
      const wrapper = mount(BaseButton)
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('px-6')
      expect(buttonClass).toContain('py-3')
      expect(buttonClass).toContain('text-base')
    })

    it('applies large size classes', () => {
      const wrapper = mount(BaseButton, {
        props: { size: 'lg' },
      })
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('px-8')
      expect(buttonClass).toContain('py-4')
      expect(buttonClass).toContain('text-lg')
    })
  })

  describe('Button Types', () => {
    it('renders with type="button" (default)', () => {
      const wrapper = mount(BaseButton)
      expect(wrapper.find('button').attributes('type')).toBe('button')
    })

    it('renders with type="submit"', () => {
      const wrapper = mount(BaseButton, {
        props: { type: 'submit' },
      })
      expect(wrapper.find('button').attributes('type')).toBe('submit')
    })

    it('renders with type="reset"', () => {
      const wrapper = mount(BaseButton, {
        props: { type: 'reset' },
      })
      expect(wrapper.find('button').attributes('type')).toBe('reset')
    })
  })

  describe('Disabled State', () => {
    it('renders enabled button by default', () => {
      const wrapper = mount(BaseButton)
      expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
    })

    it('renders disabled button when disabled prop is true', () => {
      const wrapper = mount(BaseButton, {
        props: { disabled: true },
      })
      expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })

    it('applies disabled styling when disabled', () => {
      const wrapper = mount(BaseButton, {
        props: { disabled: true },
      })
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('disabled:opacity-50')
      expect(buttonClass).toContain('disabled:cursor-not-allowed')
    })

    it('prevents click when disabled', async () => {
      const wrapper = mount(BaseButton, {
        props: { disabled: true },
      })

      await wrapper.find('button').trigger('click')
      // Disabled buttons don't emit click events in the DOM
      expect(wrapper.emitted('click')).toBeUndefined()
    })
  })

  describe('Click Events', () => {
    it('emits click event when clicked', async () => {
      const wrapper = mount(BaseButton)

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted('click')).toHaveLength(1)
    })

    it('emits multiple click events', async () => {
      const wrapper = mount(BaseButton)
      const button = wrapper.find('button')

      await button.trigger('click')
      await button.trigger('click')
      await button.trigger('click')

      expect(wrapper.emitted('click')).toHaveLength(3)
    })
  })

  describe('Combination Tests', () => {
    it('combines variant and size correctly', () => {
      const wrapper = mount(BaseButton, {
        props: {
          variant: 'danger',
          size: 'lg',
        },
      })
      const buttonClass = wrapper.find('button').attributes('class')

      // Danger variant classes
      expect(buttonClass).toContain('bg-red-700')
      // Large size classes
      expect(buttonClass).toContain('px-8')
      expect(buttonClass).toContain('py-4')
    })

    it('combines all props together', () => {
      const wrapper = mount(BaseButton, {
        props: {
          variant: 'secondary',
          size: 'sm',
          type: 'submit',
          disabled: true,
        },
        slots: {
          default: 'Submit',
        },
      })
      const button = wrapper.find('button')

      expect(button.attributes('type')).toBe('submit')
      expect(button.attributes('disabled')).toBeDefined()
      expect(button.text()).toBe('Submit')
      expect(button.attributes('class')).toContain('bg-slate-800')
    })
  })

  describe('Base Classes', () => {
    it('includes base styling classes', () => {
      const wrapper = mount(BaseButton)
      const buttonClass = wrapper.find('button').attributes('class')

      expect(buttonClass).toContain('font-semibold')
      expect(buttonClass).toContain('rounded-lg')
      expect(buttonClass).toContain('transition-all')
      expect(buttonClass).toContain('duration-200')
      expect(buttonClass).toContain('transform')
      expect(buttonClass).toContain('active:scale-95')
      expect(buttonClass).toContain('inline-flex')
      expect(buttonClass).toContain('items-center')
      expect(buttonClass).toContain('justify-center')
      expect(buttonClass).toContain('gap-2')
      expect(buttonClass).toContain('cursor-pointer')
    })
  })
})

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseLink from '../BaseLink.vue'

describe('BaseLink.vue', () => {
  it('renders anchor tag with href', () => {
    const wrapper = mount(BaseLink, {
      props: {
        href: 'https://example.com',
      },
      slots: {
        default: 'Click me',
      },
    })

    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('https://example.com')
    expect(link.text()).toBe('Click me')
  })

  it('renders with custom slot content', () => {
    const wrapper = mount(BaseLink, {
      props: {
        href: 'https://example.com',
      },
      slots: {
        default: '<span class="custom">Link Text</span>',
      },
    })

    expect(wrapper.find('span.custom').exists()).toBe(true)
    expect(wrapper.find('span.custom').text()).toBe('Link Text')
  })

  describe('Button Styling', () => {
    it('renders as plain link by default (button=false)', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: false,
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      // Should not have button styling
      expect(linkClass).not.toContain('gradient-to-r')
      expect(linkClass).not.toContain('purple')
    })

    it('renders as button when button prop is true', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      // Should have button styling (primary variant)
      expect(linkClass).toContain('gradient-to-r')
      expect(linkClass).toContain('purple')
    })

    it('applies button styles with custom class when button=true', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
          class: 'custom-class',
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toContain('gradient-to-r')
      expect(linkClass).toContain('custom-class')
    })

    it('applies plain link styling with custom class when button=false', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: false,
          class: 'text-blue-500',
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toBe('text-blue-500')
    })
  })

  describe('Button Variants', () => {
    it('applies primary variant (default)', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toContain('gradient-to-r')
      expect(linkClass).toContain('purple')
      expect(linkClass).toContain('pink')
    })

    it('applies secondary variant', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
          variant: 'secondary',
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toContain('bg-slate-800')
      expect(linkClass).toContain('text-slate-100')
      expect(linkClass).toContain('border')
      expect(linkClass).toContain('slate-700')
    })

    it('applies danger variant', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
          variant: 'danger',
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toContain('bg-red-700')
      expect(linkClass).toContain('text-white')
    })

    it('applies ghost variant', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
          variant: 'ghost',
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toContain('text-slate-400')
      expect(linkClass).toContain('hover:text-slate-100')
    })
  })

  describe('Button Sizes', () => {
    it('applies small size', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
          size: 'sm',
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toContain('px-3')
      expect(linkClass).toContain('py-1.5')
      expect(linkClass).toContain('text-sm')
    })

    it('applies medium size (default)', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toContain('px-6')
      expect(linkClass).toContain('py-3')
      expect(linkClass).toContain('text-base')
    })

    it('applies large size', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
          size: 'lg',
        },
      })
      const linkClass = wrapper.find('a').attributes('class')

      expect(linkClass).toContain('px-8')
      expect(linkClass).toContain('py-4')
      expect(linkClass).toContain('text-lg')
    })
  })

  describe('Target Attribute', () => {
    it('uses _self as default target', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
        },
      })

      expect(wrapper.find('a').attributes('target')).toBe('_self')
    })

    it('sets target="_blank" for external links', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          target: '_blank',
        },
      })

      expect(wrapper.find('a').attributes('target')).toBe('_blank')
    })

    it('sets target="_parent"', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          target: '_parent',
        },
      })

      expect(wrapper.find('a').attributes('target')).toBe('_parent')
    })

    it('sets target="_top"', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          target: '_top',
        },
      })

      expect(wrapper.find('a').attributes('target')).toBe('_top')
    })
  })

  describe('Rel Attribute', () => {
    it('adds noopener noreferrer when target="_blank"', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          target: '_blank',
        },
      })

      expect(wrapper.find('a').attributes('rel')).toBe('noopener noreferrer')
    })

    it('merges custom rel with noopener noreferrer when target="_blank"', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          target: '_blank',
          rel: 'author',
        },
      })

      expect(wrapper.find('a').attributes('rel')).toBe('author noopener noreferrer')
    })

    it('applies custom rel when target is not _blank', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          target: '_self',
          rel: 'nofollow',
        },
      })

      expect(wrapper.find('a').attributes('rel')).toBe('nofollow')
    })

    it('does not set rel when target is not _blank and no rel prop', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          target: '_self',
        },
      })

      expect(wrapper.find('a').attributes('rel')).toBeUndefined()
    })
  })

  describe('Security', () => {
    it('always adds noopener noreferrer for _blank targets (security)', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'javascript:alert("xss")',
          target: '_blank',
        },
      })

      const rel = wrapper.find('a').attributes('rel')
      expect(rel).toContain('noopener')
      expect(rel).toContain('noreferrer')
    })

    it('prevents reverse tabnabbing with noreferrer', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://evil.com',
          target: '_blank',
        },
      })

      expect(wrapper.find('a').attributes('rel')).toContain('noreferrer')
    })
  })

  describe('Combination Tests', () => {
    it('combines button props with target and rel correctly', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
          variant: 'secondary',
          size: 'lg',
          target: '_blank',
          rel: 'nofollow',
        },
      })
      const link = wrapper.find('a')

      expect(link.attributes('href')).toBe('https://example.com')
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('nofollow noopener noreferrer')

      const linkClass = link.attributes('class')
      expect(linkClass).toContain('bg-slate-800')
      expect(linkClass).toContain('px-8')
      expect(linkClass).toContain('py-4')
    })

    it('combines all button styles with custom class', () => {
      const wrapper = mount(BaseLink, {
        props: {
          href: 'https://example.com',
          button: true,
          variant: 'danger',
          size: 'sm',
          class: 'w-full',
        },
        slots: {
          default: 'Delete',
        },
      })
      const link = wrapper.find('a')

      expect(link.text()).toBe('Delete')
      expect(link.attributes('class')).toContain('bg-red-700')
      expect(link.attributes('class')).toContain('px-3')
      expect(link.attributes('class')).toContain('w-full')
    })
  })
})

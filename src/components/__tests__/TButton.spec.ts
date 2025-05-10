import type { VueWrapper } from '@vue/test-utils'

import { beforeEach, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TButton from '~/components/TButton.vue'

describe('TButton', () => {
  let component: VueWrapper

  beforeEach(() => {
    component = mount(TButton, {
      slots: {
        default: 'Foo',
      },
    })
  })

  it('is exists', () => {
    expect(component.exists()).toBeTruthy()
  })

  it('is visible', () => {
    expect(component.isVisible()).toBeTruthy()
  })

  it('renders the default slot', () => {
    expect(component.text()).toContain('Foo')
  })
})

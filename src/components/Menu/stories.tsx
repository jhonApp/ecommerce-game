import { StoryFn, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
} as Meta

export const Default: StoryFn<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@luan-ignite-ui-ds/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur similique quaerat sit, quis voluptate inventore? Est sint aliquid consequatur distinctio rerum iure, quod porro? Laboriosam maiores itaque similique quae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    size: 'lg',
    as: 'strong',
  },
}

import type { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@luan-ignite-ui-ds/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: 'center', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

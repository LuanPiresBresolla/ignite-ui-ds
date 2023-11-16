import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@luan-ignite-ui-ds/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    placeholder: 'Text input placeholder',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Input label</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'https://',
    placeholder: 'your site',
    container: {
      size: 'sm',
    },
  },
}

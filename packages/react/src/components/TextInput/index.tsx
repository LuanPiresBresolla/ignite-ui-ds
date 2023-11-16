import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
  container?: ComponentProps<typeof TextInputContainer>
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, container, ...props }, ref) => {
    return (
      <TextInputContainer {...container}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

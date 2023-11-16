import { Label, MultiStepContaier, Step, Steps } from './styles'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <>
      <MultiStepContaier>
        <Label>
          Passo {currentStep} de {size}
        </Label>

        <Steps css={{ '--steps-size': size }}>
          {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
            return <Step key={step} active={currentStep >= step} />
          })}
        </Steps>
      </MultiStepContaier>
    </>
  )
}

MultiStep.displayName = 'MultiStep'

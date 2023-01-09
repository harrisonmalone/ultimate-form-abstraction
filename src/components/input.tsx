import type { ComponentProps } from 'react';
import { forwardRef } from 'react'
import { FormField, useFormField } from './formField';

interface Props extends ComponentProps<'input'> {
  name: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(function ForwardedInput(props, ref) {
  const { formFieldProps, childProps } = useFormField(props);

  return (
    <FormField {...formFieldProps} >
      <input {...childProps} ref={ref} className="w-full border-2 border-gray-400 h-8" />
    </FormField>
  );
});
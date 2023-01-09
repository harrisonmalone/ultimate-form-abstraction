import type { ComponentProps } from 'react';
import { forwardRef } from 'react'
import { FormField, useFormField } from './formField';

interface Props extends ComponentProps<'select'> {
  name: string;
  label: string
}

export const Select = forwardRef<HTMLSelectElement, Props>(function ForwardedSelect (props, ref) {
  const { formFieldProps, childProps } = useFormField(props);

  return (
    <FormField {...formFieldProps}>
      <select {...childProps} ref={ref} className="w-full border-2 border-gray-400 h-8" />
    </FormField>
  );
});
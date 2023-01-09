import type { ComponentProps, } from 'react';
import type {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

interface Props<T extends FieldValues>
  extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: Props<T>) => {

  return (
    <FormProvider {...form}>
      {/* https://github.com/react-hook-form/react-hook-form/discussions/8020#discussioncomment-3362300 */}
      <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)} {...props}>
        <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
      </form>
    </FormProvider>
  )
};

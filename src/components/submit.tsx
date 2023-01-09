import type { ComponentProps } from 'react';

interface Props extends Omit<ComponentProps<'button'>, 'type'>{}

const SubmitButton = (props: Props) => <button {...props} type="submit" className='border-2 p-1 border-gray-400 mt-2' />;

export default SubmitButton;
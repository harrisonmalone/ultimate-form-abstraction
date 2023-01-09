import { PropsWithChildren } from "react";

export const SubmitButton = ({ children }: PropsWithChildren) => <button type="submit" className='border-2 p-1 border-gray-400 mt-2'>
  {children}
</button>
import { clsx } from 'clsx';

export interface TextInputProps {
}

export function TextInput( {} : TextInputProps) {
  return(
    <input 
    className={clsx(
      'py-4 px-3 rounded bg-black w-full text-blue-200 text-xs placeholder:text-blue-100 shadow-inner-neo',
    )}
    ></input>
  )
}

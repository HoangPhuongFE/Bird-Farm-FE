/* eslint-disable react/display-name */
import clsx from 'clsx'

import React from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseInputProps {
  fullWidth?: boolean
  className?: string
  error?: string
  spacing?: string
  size?: string
  handleIconClick?(): void
  placeholder?: string
}

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  BaseInputProps
const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      fullWidth,
      className,
      spacing,
      disabled,
      placeholder,
      handleIconClick = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(spacing ? '' : 'space-x-2', fullWidth && 'w-full')}>
        <div className="relative">
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            className={twMerge(
              'rounded-lg border-[1px] border-slate-600  bg-slate-100 p-[8px]  shadow-xl outline-none hover:bg-white',
              fullWidth && 'w-full',
              className
            )}
            {...props}
          />
        </div>
      </div>
    )
  }
)

export default TextInput

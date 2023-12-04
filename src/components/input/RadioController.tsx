import React from 'react'
import { Control, Controller } from 'react-hook-form'

interface Option {
  value: string
  label: string
}

interface RadioControllerProps {
  name: string
  control: Control
  options: Option[]
  onChange: (value: string) => void
  defaultValue: string
}

const RadioController: React.FC<RadioControllerProps> = ({
  name,
  control,
  options,
  onChange,
  defaultValue
}) => {
  return (
    <div className={`space-y-3`}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            {options.map((option) => (
              <label
                key={option.value}
                className={`relative flex w-[200px] cursor-pointer rounded-lg border-[1px] border-slate-500 px-4 py-2 shadow-md focus:outline-none ${
                  field.value === option.value
                    ? 'bg-slate-500 bg-opacity-75 text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                <input
                  type="radio"
                  value={option.value}
                  onChange={(e) => {
                    field.onChange(e)
                    onChange(option.value)
                  }}
                  onBlur={field.onBlur}
                  checked={field.value === option.value}
                  className="sr-only"
                />
                <span className="flex w-[200px] items-center justify-between">
                  <span className="text-md font-medium">{option.label}</span>
                  {field.value === option.value && (
                    <span className="shrink-0 text-white">
                      <CheckIcon className="h-6 w-6" />
                    </span>
                  )}
                </span>
              </label>
            ))}
          </>
        )}
      />
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RadioController

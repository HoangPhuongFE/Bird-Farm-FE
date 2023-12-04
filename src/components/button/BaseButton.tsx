import { twMerge } from 'tailwind-merge'

interface BaseButtonProps {
  spacing?: string
  title?: string
  handleClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}
const BaseButton = ({
  title,
  handleClick,
  className,
  type
}: BaseButtonProps) => {
  return (
    <div className="relative">
      <button
        type={type}
        onClick={handleClick}
        className={twMerge(
          'rounded-md bg-gray-400 text-white transition-opacity duration-75 hover:bg-opacity-70',
          className
        )}
      >
        <span>{title}</span>
      </button>
    </div>
  )
}

export default BaseButton

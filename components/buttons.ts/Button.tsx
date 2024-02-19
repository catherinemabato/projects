import { twMerge } from "tailwind-merge";
import Link from 'next/link'

type IButtonProps = {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  bgClassName?: string;
  textClassName?: string;
  buttonSize?: 'small' | 'large';
  type?: 'submit' | 'reset' | 'button';
} & 
({
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> | {
  href: undefined | null;
} & React.ButtonHTMLAttributes<HTMLButtonElement>)


/**
 * @description The Button component is a reusable button component that can be used to render a button or an anchor tag. It accepts a variety of props to customize the button's appearance and behavior.
 * @description The component accepts button or anchor tag props based on the presence of the href prop. If the href prop is present, the component will render an anchor tag, otherwise it will render a button tag.
 */
export default function Button({
  text,
  type = 'button',
  target = '_self',
  icon,
  iconPosition = 'right',
  className,
  bgClassName = twMerge(`bg-primary-500 hover:bg-primary-400`),
  textClassName = twMerge(`text-white`),
  buttonSize,
  ...props
}: IButtonProps) : React.ReactElement {

  const smallButtonClasses = twMerge(`${bgClassName} ${textClassName} transition-all duration-500 ease-in-out rounded-md px-3 py-2 text-sm font-medium tracking-heading ${className || ''}`)
  const classNames = twMerge(`${bgClassName} ${textClassName} transition-all duration-500 ease-in-out rounded-md px-4 py-3 text-md font-semibold tracking-heading ${className || ''}`)

  if (!props.href) {    
    return (
      <button {...props as React.ButtonHTMLAttributes<HTMLButtonElement>} type={type} className={buttonSize === 'small' ? smallButtonClasses : classNames} data-testid="Button-main" > 
        {
          icon && iconPosition === 'left' && (
            <span className="inline-block mr-2" data-testid="Button-icon-left">{icon}</span>
          )
        }
        <span className="inline-block">{text}</span>
        {
          icon && iconPosition === 'right' && (
            <span className="inline-block ml-2" data-testid="Button-icon-right">{icon}</span>
          )
        }
      </button>
    )
  }

  return (
    <Link href={props.href} passHref>
      <a {...props} target={target} rel="noopener noreferrer" className={buttonSize === 'small' ? smallButtonClasses : classNames} data-testid="Button-link">
        {
          icon && iconPosition === 'left' && (
            <span className="inline-block mr-2">{icon}</span>
          )
        }
        <span className="inline-block">{text}</span>
        {
          icon && iconPosition === 'right' && (
            <span className="inline-block ml-2">{icon}</span>
          )
        }
      </a>
    </Link>
  )
}


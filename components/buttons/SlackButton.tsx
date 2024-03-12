import IconSlack from '../icons/Slack';
import Button, { ButtonIconPositionType } from './Button';
import type { IButtonDefaultProps } from './types';

interface ISlackButtonProps extends IButtonDefaultProps {}

/**
 * @description The SlackButton component is a button that links to the AsyncAPI Slack channel.
 * @param {string} props.text - The text to display on the button.
 * @param {string} props.href - The href attribute for the anchor tag.
 * @param {string} props.target - The target attribute for the anchor tag.
 * @param {ButtonIconPositionType} props.iconPosition - The position of the icon in the button.
 * @param {string} props.className - The class name to be applied to the button.
 */
export default function SlackButton({
  text = 'Join on Slack',
  href = '/slack-invite',
  target = '_blank',
  iconPosition = ButtonIconPositionType.left,
  className
}: ISlackButtonProps) {
  return (
    <Button
      text={text}
      icon={<IconSlack className='-mt-1 inline-block size-6 p-0.5' />}
      href={href}
      iconPosition={iconPosition}
      target={target}
      className={className}
      data-testid='Slack-button'
      bgClassName='bg-slack  hover:bg-slack-light'
    />
  );
}

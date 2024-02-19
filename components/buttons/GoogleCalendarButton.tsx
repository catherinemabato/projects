import Button from './Button';
import IconGoogleCalendar from '../icons/GoogleCalendar';
import { IButtonDefaultProps } from './types';
// TODO: add this again when we have i18n
// import { useTranslation } from '../../lib/i18n';

interface IGoogleCalendarButtonProps extends IButtonDefaultProps {}

export default function GoogleCalendarButton({
  text = 'googleCalendarBtn',
  href,
  target = '_blank',
  iconPosition = 'left',
  className,
}: IGoogleCalendarButtonProps) {

  // TODO: add this again when we have i18n
  // const { t } = useTranslation('common'); 

  return (
    <Button
      // TODO: add this again when we have i18n
      // text={t(text)}
      text={text}
      icon={<IconGoogleCalendar />}
      href={href}
      iconPosition={iconPosition}
      target={target}
      className={`text-center block mt-2 md:mt-0 md:inline-block text-gray-900 ${className}`}
      bgClassName="bg-gray-200 hover:bg-gray-100"
    />
  )
}


import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src={`${router.basePath}/img/icotile360.png`}
        alt={AppConfig.site_name}
        width={32}
        height={32}
        className="m-2 h-8 w-8"
      />
      <span>{AppConfig.site_name}</span>
    </span>
  );
};

export { Logo };

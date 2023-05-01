import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const router = useRouter();
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <></>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-8 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-xl">
                {'Twitter Friends and Lists Manager\n'}
              </span>
              <span className="text-primary-500">
                <b>icotile</b>
              </span>
            </>
          }
          descriptions={[
            'icotile has been terminated in March 2023. Until then, 82,690 twitter accounts have used the app since 2011. Thank you for using!',
            'icotile（アイコタイル）は 2023年3月にサービス終了しました。2011年のサービス開始以来、82,690 アカウントのご利用がありました。ご利用ありがとうございました！',
          ]}
          button={undefined}
        />
        <img
          className="sm:w-full md:w-1/2 mx-auto"
          src={`${router.basePath}/img/main.png`}
          alt="Screen capture of icotile for Web"
        />
        <img
          className="sm:w-full md:w-1/2 mx-auto"
          src={`${router.basePath}/img/icotile-iphone-ipad.png`}
          alt="iPhone and iPad apps"
        />
      </Section>
    </Background>
  );
};

export { Hero };

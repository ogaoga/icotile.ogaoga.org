import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  descriptions: string[];
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-600 whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="mb-16">
      {props.descriptions.map((desc, index) => {
        return (
          <div key={index} className="text-2xl mt-4">
            {desc}
          </div>
        );
      })}
    </div>
    {props.button}
  </header>
);

export { HeroOneButton };

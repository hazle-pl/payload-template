import React from 'react';
import RichText from '@/components/RichText';
import './style.scss';
import Link from 'next/link';

interface Button {
  label: string;
  link: string;
}

interface ContentBannerProps {
  contentBannerProps: {
    bg: string;
    richText: any;
    buttons: Button[];
    flexProps: {
      direction: string;
      justify: string;
      align: string;
    }
  };
}

export const ContentBannerBlock: React.FC<ContentBannerProps> = ({ contentBannerProps }) => {
  const { bg, richText, buttons, flexProps } = contentBannerProps;
  const {direction, justify, align} = flexProps;

  const flexClasses = `
    flex-direction-${direction} 
    justify-${justify} 
    align-${align}
  `.trim();

  return (
    <div className={`content-banner bg-${bg} ${flexClasses}`}>
      <RichText data={richText} />
      <div className="button-container">
        {buttons.map((button, index) => (
          <Link key={index} href={button.link} className="btn">
            {button.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

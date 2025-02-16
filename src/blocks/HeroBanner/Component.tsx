import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';
import { RichText } from '@payloadcms/richtext-lexical/react';

type HeroBannerProps = {
  text: any;
  buttons?: { buttonText: string; buttonLink: string }[];
  backgroundColor?: string;
  image?: { filename?: string };
  backgroundImage?: { filename?: string };
  height?: 'xs' | 'md' | 'xl';
};

export const HeroBannerBlock: React.FC<HeroBannerProps> = ({ text, buttons, backgroundColor, image, backgroundImage, height }) => {
  return (
    <div className={`hero-banner container bg-${backgroundColor} height-${height}`} style={backgroundImage?.filename ? { backgroundImage: `url(/media/${backgroundImage.filename})` } : {}}>
      <div className="content-wrapper">
        <div className="hero-banner__content">
            <RichText data={text} />
            <div className="button-container">
                {buttons?.map((button, index) => (
                <Link key={index} href={button.buttonLink} className="btn">
                    {button.buttonText}
                </Link>
                ))}
            </div>
        </div>
        {image?.filename && 
        <div className="hero-banner__image">
            <Image src={`/media/${image.filename}`} alt="Hero Banner Image" width={600} height={400} />
        </div>
        }
      </div>
    </div>
  );
};

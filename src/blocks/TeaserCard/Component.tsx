import Image from 'next/image';
import React from 'react';
import './style.scss';
import Link from 'next/link';

type TeaserCardProps = {
  title: string;
  description?: string;
  image?: { filename?: string };
  icon?: string;
  buttonText?: string;
  buttonLink?: string;
  imagePosition?: string;
  bg?: string;
  styleVariant?: string;
};

export const TeaserCardBlock: React.FC<TeaserCardProps> = ({ title, description, image, buttonText, buttonLink, imagePosition, bg, styleVariant, icon }) => {

  return (
    <div className={`${imagePosition} bg-${bg} ${styleVariant} teaser-card`}>
      {image?.filename && <Image src={`/media/${image.filename}`} alt={title} width={400} height={400} className="teaser-card__image" />}
      {icon && <i className={`teaser-card__icon ${icon}`}/>}
      <div className="teaser-card__content">
        <h3 className="teaser-card__title">{title}</h3>
        <p className="teaser-card__description">{description}</p>
        {buttonText && buttonLink && (
          <Link href={buttonLink} className="btn">
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};
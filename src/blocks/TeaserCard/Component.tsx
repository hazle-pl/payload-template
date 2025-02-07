import React from 'react';


type TeaserCardProps = {
  title: string;
  description: string;
  image?: { url: string };
  buttonText?: string;
  buttonLink?: string;
};

export const TeaserCardBlock: React.FC<TeaserCardProps> = ({ title, description, image, buttonText, buttonLink }) => {

    console.log('test');

  return (
    <div className="teaser-card">
      {image?.url && <img src={image.url} alt={title} className="teaser-card__image" />}
      <h3 className="teaser-card__title">{title}</h3>
      <p className="teaser-card__description">{description}</p>
      {buttonText && buttonLink && (
        <a href={buttonLink} className="teaser-card__button">
          {buttonText}
        </a>
      )}
    </div>
  );
};



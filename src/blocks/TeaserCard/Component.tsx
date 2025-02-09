import React from 'react';
import type { Block } from 'payload';

type TeaserCardProps = {
  title?: string;
  description?: string;
  image?: { filename?: string };
  buttonText?: string;
  buttonLink?: string;
};

export const TeaserCardBlock: React.FC<TeaserCardProps> = ({ title, description, image, buttonText, buttonLink }) => {
  return (
    <div className="teaser-card">
      {image?.filename && <img src={`/media/${image.filename}`} alt={title} className="teaser-card__image" />}
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
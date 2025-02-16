import Image from 'next/image';
import React from 'react';
import './style.scss';

type ImageProps = {
  image?: { filename?: any };
};

export const ImageBlock: React.FC<ImageProps> = ({image}) => {

  if(!image){ return null }

  return (
  <Image src={`/media/${image.filename}`} alt={image.filename} width={400} height={400} className="image" />
  );
};
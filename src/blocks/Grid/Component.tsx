import React from 'react';
import { TeaserCardBlock } from '../TeaserCard/Component';
import './style.scss'
import { RichTextComponentBlock } from '../RichTextComponent/Component';
import { ImageBlock } from '../Image/Component';

type GridProps = {
  columns: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  content: Array<{ blockType: string } & Record<string, any>>;
};

export const GridBlock: React.FC<GridProps> = ({ columns, content }) => {
  const gridColumns = `
    grid
    grid-sm-${columns.sm}
    grid-md-${columns.md}
    grid-lg-${columns.lg}
    grid-xl-${columns.xl}
  `;

  return (
    <div className={gridColumns}>
      {content.map((block, index) => {
        switch (block.blockType) {
          case 'teaserCard':
            return <TeaserCardBlock title={''} key={index} {...block} />;
          case 'richTextBlock':
            return <RichTextComponentBlock richText={undefined} key={index} {...block} />
          case 'image':
            return <ImageBlock key={index} {...block}/>;
          default:
            return <div key={index}>Nieznany blok: {block.blockType}</div>;
        }
      })}
    </div>
  );
};

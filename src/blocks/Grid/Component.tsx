import React from 'react';
import type { Block } from 'payload';
import { TeaserCardBlock } from '../TeaserCard/Component';
import './style.scss'

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
    container
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
            return <TeaserCardBlock key={index} {...block} />;
          default:
            return <div key={index}>Nieznany blok: {block.blockType}</div>;
        }
      })}
    </div>
  );
};

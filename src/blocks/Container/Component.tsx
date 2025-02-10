import React from 'react';
import type { Block } from 'payload';
import { TeaserCardBlock } from '../TeaserCard/Component';
import './style.scss'
import { GridBlock } from '../Grid/Component';
import { AccordionBlock } from '../Accordion/Component'

type ContainerProps = {
  containerProps: {
    bg: string;
  };
  content: Array<{ blockType: string } & Record<string, any>>;
};

export const ContainerBlock: React.FC<ContainerProps> = ({ containerProps, content }) => {
  const classNames = `
    container
    bg-${containerProps.bg}
  `;

  return (
    <div className={classNames}>
      <div className="content-wrapper">
      {content.map((block, index) => {
        switch (block.blockType) {
          case 'teaserCard':
            return <TeaserCardBlock title={''} key={index} {...block} />;
          case 'accordion':
            return <AccordionBlock title={''} items={[]} key={index} {...block} />;
          case 'grid':
              return <GridBlock columns={{
                sm: '',
                md: '',
                lg: '',
                xl: ''
              }} content={[]} key={index} {...block} />;
          default:
            return <div key={index}>Nieznany blok: {block.blockType}</div>;
        }
      })}
      </div>
    </div>
  );
};

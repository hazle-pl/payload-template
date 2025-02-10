'use client'
import React, { useState } from 'react';
import './style.scss';
import { TeaserCardBlock } from '../TeaserCard/Component';
import { RichTextComponentBlock } from '../RichTextComponent/Component';

type AccordionItem = {
  itemTitle: string;
  content: any[];
};

type AccordionProps = {
  title: string;
  items: AccordionItem[];
};

export const AccordionBlock: React.FC<AccordionProps> = ({ title, items }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setActiveIndexes(prevIndexes => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(i => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className="accordion">
      {title && (<h2>{title}</h2>)}
      {items.map((item, index) => (
        <div key={index} className="accordion__item">
          <button
            className={`accordion__item--header ${activeIndexes.includes(index) ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
          >
            {item.itemTitle}
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          {activeIndexes.includes(index) && (
            <div className="accordion__item--content">
              {item.content.map((block, index) => {
                switch (block.blockType) {
                  case 'teaserCard':
                    return <TeaserCardBlock key={index} {...block} />;
                  case 'richTextBlock':
                    return <RichTextComponentBlock key={index} {...block} />;
                  default:
                    return <div key={index}>Nieznany blok: {block.blockType}</div>;
                }
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

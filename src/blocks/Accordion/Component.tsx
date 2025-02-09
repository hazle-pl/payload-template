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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <h2 className="accordion-title">{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-item-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
          >
            {item.itemTitle}
          </button>
          {activeIndex === index && (
            <div className="accordion-item-content">
              {item.content.map((block, index) => {
                      switch (block.blockType) {
                        case 'teaserCard':
                          return <TeaserCardBlock key={index} {...block} />;
                        case 'richTextBlock':
                            return <RichTextComponentBlock key={index} {...block} />
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
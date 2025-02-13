'use client'
import React, { useState } from 'react';
import './style.scss';
import { TeaserCardBlock } from '../TeaserCard/Component';
import { RichTextComponentBlock } from '../RichTextComponent/Component';
import { GridBlock } from '../Grid/Component';

type TabItem = {
  tabTitle: string;
  content: any[];
};

type TabsProps = {
  title?: string;
  items?: TabItem[];
};

export const TabsBlock: React.FC<TabsProps> = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!items || items.length === 0) {
    return <div>No tabs available.</div>;
  }

  const changeTab = (index: number) => {
    if (index >= 0 && index < items.length) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="tabs">
      {title && <h2>{title}</h2>}
      <div className="tabs__header">
        {items.map((item, index) => (
          <button
            key={index}
            className={`tabs__header--button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => changeTab(index)}
          >
            {item.tabTitle}
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {items[activeIndex]?.content.map((block, index) => {
          switch (block.blockType) {
            case 'teaserCard':
              return <TeaserCardBlock key={index} {...block} />;
              case 'grid':
                return <GridBlock key={index} columns={{
                    sm: '',
                    md: '',
                    lg: '',
                    xl: ''
                }} content={[]} {...block} />;
            case 'richTextBlock':
              return <RichTextComponentBlock key={index} {...block} />;
            default:
              return <div key={index}>Nieznany blok: {block.blockType}</div>;
          }
        })}
      </div>
    </div>
  );
};
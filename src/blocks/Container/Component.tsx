import React from 'react';
import { TeaserCardBlock } from '../TeaserCard/Component';
import './style.scss';
import { GridBlock } from '../Grid/Component';
import { AccordionBlock } from '../Accordion/Component';
import { TabsBlock } from '../Tabs/Component';
import { RichTextComponentBlock } from '../RichTextComponent/Component';
import { ContentBannerBlock } from '../ContentBanner/Component';
import { BreadcrumbBlock } from '../Breadcrumb/Component';
import { ImageBlock } from '../Image/Component';

type ContainerProps = {
  containerProps: {
    bg: string;
    flexProps?: {
      direction?: string;
      justify?: string;
      align?: string;
    };
  };
  content: Array<{ blockType: string } & Record<string, any>>;
};

export const ContainerBlock: React.FC<ContainerProps> = ({ containerProps, content }) => {
  const { bg, flexProps = {} } = containerProps;
  const { direction = 'column', justify = 'start', align = 'stretch' } = flexProps;

  const classNames = `container bg-${bg}`;
  const wrapperClassNames = `
    content-wrapper 
    flex-direction-${direction} 
    justify-${justify} 
    align-${align}
  `.trim();

  return (
    <div className={classNames}>
      <div className={wrapperClassNames}>
        {content.map((block, index) => {
          switch (block.blockType) {
            case 'teaserCard':
              return <TeaserCardBlock title={''} key={index} {...block} />;
            case 'accordion':
              return <AccordionBlock title={''} items={[]} key={index} {...block} />;
            case 'tabs':
              return <TabsBlock key={index} {...block} />;
            case 'breadcrumb':
              return <BreadcrumbBlock key={index} {...block}/>;
            case 'image':
              return <ImageBlock key={index} {...block}/>;
            case 'contentBanner':
              return <ContentBannerBlock contentBannerProps={{
                bg: '',
                richText: undefined,
                buttons: [],
                flexProps: {
                  direction: '',
                  justify: '',
                  align: ''
                }
              }} {...block} key={index}/>;
            case 'richTextBlock':
              return <RichTextComponentBlock key={index} richText={block.richText || ''} {...block} />;
            case 'grid':
              return (
                <GridBlock
                  key={index}
                  columns={block.columns || { sm: '', md: '', lg: '', xl: '' }}
                  content={block.content || []}
                  {...block}
                />
              );
            default:
              return <div key={index}>Nieznany blok: {block.blockType}</div>;
          }
        })}
      </div>
    </div>
  );
};
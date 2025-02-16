import React, { Fragment } from 'react';

import type { Page } from '@/payload-types';

import { TeaserCardBlock } from '@/blocks/TeaserCard/Component';
import { GridBlock } from '@/blocks/Grid/Component';
import { AccordionBlock } from '@/blocks/Accordion/Component';
import { RichTextComponentBlock } from './RichTextComponent/Component';
import { ContainerBlock } from './Container/Component';
import { ArchiveBlock } from './ArchiveBlock/Component';
import { ContentBlock } from './Content/Component';
import { CallToActionBlock } from './CallToAction/Component';
import { FormBlock } from './Form/config';
import { MediaBlock } from './MediaBlock/config';
import { TabsBlock } from './Tabs/Component';
import { ContentBannerBlock } from './ContentBanner/Component';
import { BreadcrumbBlock } from './Breadcrumb/Component';
import { HeroBannerBlock } from './HeroBanner/Component';

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  teaserCard: TeaserCardBlock,
  grid: GridBlock,
  richTextBlock: RichTextComponentBlock,
  accordion: AccordionBlock,
  container: ContainerBlock,
  tabs: TabsBlock,
  contentBanner: ContentBannerBlock,
  breadcrumb: BreadcrumbBlock,
  heroBanner: HeroBannerBlock,
};

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};

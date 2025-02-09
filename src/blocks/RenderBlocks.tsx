import React, { Fragment } from 'react';

import type { Page } from '@/payload-types';

import { TeaserCardBlock } from '@/blocks/TeaserCard/Component';
import { GridBlock } from '@/blocks/Grid/Component';
import { AccordionBlock } from '@/blocks/Accordion/Component';
import { RichTextComponentBlock } from './RichTextComponent/Component';
import { ContainerBlock } from './Container/Component';

const blockComponents = {
  teaserCard: TeaserCardBlock,
  grid: GridBlock,
  accordion: AccordionBlock,
  richTextBlock: RichTextComponentBlock,
  container: ContainerBlock
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

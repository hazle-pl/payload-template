import { getCachedGlobal } from '@/utilities/getGlobals';
import React from 'react';
import type { Footer as FooterType } from '@/payload-types';
import { GridBlock } from '@/blocks/Grid/Component';

export async function Footer() {
  
  const footerData: FooterType = await getCachedGlobal('footer', 1)();
  const content = footerData?.content || [];

  return (
    <footer className="container">
      <div className="content-wrapper">
        {content.map((block, index) => {
          switch (block.blockType) {
            case 'grid':
              return (
                <GridBlock 
                  key={index}
                  columns={block.columns || { sm: '1', md: '1', lg: '1', xl: '1' }}
                  content={block.content || []} 
                />
              );
            default:
              return <div key={index}>Nieznany blok: {block.blockType}</div>;
          }
        })}
      </div>
    </footer>
  );
}

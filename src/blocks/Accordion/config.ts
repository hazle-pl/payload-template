import { Block } from 'payload';
import { TeaserCard } from '../TeaserCard/config';
import { RichTextComponent } from '../RichTextComponent/config';

export const Accordion: Block = {
  slug: 'accordion',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Tytuł Accordion',
      required: false,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Elementy Accordion',
      fields: [
        {
          name: 'itemTitle',
          type: 'text',
          label: 'Tytuł Elementu',
          required: true,
        },
        {
          name: 'content',
          type: 'blocks',
          label: 'Zawartość Elementu',
          blocks: [
            TeaserCard, RichTextComponent
          ],
        },
      ],
    },
  ],
};
import { Block } from 'payload';
import { TeaserCard } from '../TeaserCard/config';
import { RichTextComponent } from '../RichTextComponent/config';
import { Grid } from '../Grid/config';

export const Tabs: Block = {
  slug: 'tabs',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Tytuł Tabs',
      required: false,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Zakładki',
      fields: [
        {
          name: 'tabTitle',
          type: 'text',
          label: 'Tytuł Zakładki',
          required: true,
        },
        {
          name: 'content',
          type: 'blocks',
          label: 'Zawartość Zakładki',
          blocks: [
            TeaserCard, RichTextComponent, Grid
          ],
        },
      ],
    },
  ],
};
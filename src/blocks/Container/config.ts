import type { Block } from 'payload';
import { TeaserCard } from '../TeaserCard/config';
import { RichTextComponent } from '../RichTextComponent/config';
import { Accordion } from '../Accordion/config';
import { Grid } from '../Grid/config';

export const Container: Block = {
  slug: 'container',
  interfaceName: 'Container',
  fields: [
    {
      name: 'containerProps',
      label: 'Container properties',
      type: 'group',
      fields: [
        {
          name: 'bg',
          label: 'Background color',
          type: 'select',
          required: true,
          defaultValue: '1',
          options: [
            { label: 'Primary 100', value: 'primary-100' },
            { label: 'Primary 200', value: 'primary-200' },
            { label: 'Primary 300', value: 'primary-300' },
            { label: 'Primary 400', value: 'primary-400' },
          ],
        },
      ],
    },
    {
      name: 'content',
      label: 'Bloki treści',
      type: 'blocks',
      blocks: [TeaserCard, RichTextComponent, Accordion, Grid],
    },
  ],
};

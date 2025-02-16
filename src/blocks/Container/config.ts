import type { Block } from 'payload';
import { TeaserCard } from '../TeaserCard/config';
import { RichTextComponent } from '../RichTextComponent/config';
import { Accordion } from '../Accordion/config';
import { Grid } from '../Grid/config';
import { Tabs } from '../Tabs/config';
import { ContentBanner } from '../ContentBanner/config';
import { Breadcrumb } from '../Breadcrumb/config';
import { Image } from '../Image/config';

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
          defaultValue: 'neutral-900',
          options: [
            { label: 'Primary 100', value: 'primary-100' },
            { label: 'Primary 200', value: 'primary-200' },
            { label: 'Primary 300', value: 'primary-300' },
            { label: 'Primary 400', value: 'primary-400' },
            { label: 'Primary 500', value: 'primary-500' },
            { label: 'Primary 600', value: 'primary-600' },
            { label: 'Primary 700', value: 'primary-700' },
            { label: 'Primary 800', value: 'primary-800' },
            { label: 'Primary 900', value: 'primary-900' },
            { label: 'Secondary 100', value: 'secondary-100' },
            { label: 'Secondary 200', value: 'secondary-200' },
            { label: 'Secondary 300', value: 'secondary-300' },
            { label: 'Secondary 400', value: 'secondary-400' },
            { label: 'Secondary 500', value: 'secondary-500' },
            { label: 'Secondary 600', value: 'secondary-600' },
            { label: 'Secondary 700', value: 'secondary-700' },
            { label: 'Secondary 800', value: 'secondary-800' },
            { label: 'Secondary 900', value: 'secondary-900' },
            { label: 'Neutral 100', value: 'neutral-100' },
            { label: 'Neutral 200', value: 'neutral-200' },
            { label: 'Neutral 300', value: 'neutral-300' },
            { label: 'Neutral 400', value: 'neutral-400' },
            { label: 'Neutral 500', value: 'neutral-500' },
            { label: 'Neutral 600', value: 'neutral-600' },
            { label: 'Neutral 700', value: 'neutral-700' },
            { label: 'Neutral 800', value: 'neutral-800' },
            { label: 'Neutral 900', value: 'neutral-900' },
          ],
        },
        {
          name: 'flexProps',
          label: 'Flex properties',
          type: 'group',
          fields: [
            {
              name: 'direction',
              label: 'Flex Direction',
              type: 'select',
              required: false,
              defaultValue: '',
              options: [
                { label: 'Row', value: 'row' },
                { label: 'Column', value: 'column' },
              ],
            },
            {
              name: 'justify',
              label: 'Justify Content',
              type: 'select',
              required: false,
              defaultValue: '',
              options: [
                { label: 'Start', value: 'flex-start' },
                { label: 'Center', value: 'center' },
                { label: 'End', value: 'flex-end' },
                { label: 'Space Between', value: 'space-between' },
                { label: 'Space Around', value: 'space-around' },
                { label: 'Space Evenly', value: 'space-evenly' },
              ],
            },
            {
              name: 'align',
              label: 'Align Items',
              type: 'select',
              required: false,
              defaultValue: '',
              options: [
                { label: 'Start', value: 'flex-start' },
                { label: 'Center', value: 'center' },
                { label: 'End', value: 'flex-end' },
                { label: 'Stretch', value: 'stretch' },
                { label: 'Baseline', value: 'baseline' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      label: 'Bloki treści',
      type: 'blocks',
      blocks: [TeaserCard, RichTextComponent, Accordion, Grid, Tabs, ContentBanner, Breadcrumb, Image],
    },
  ],
};

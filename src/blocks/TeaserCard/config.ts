import type { Block } from 'payload';

export const TeaserCard: Block = {
  slug: 'teaserCard',
  interfaceName: 'TeaserCard',
  fields: [
    {
      name: 'title',
      label: 'Tytuł',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Opis',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Obrazek',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'buttonText',
      label: 'Tekst przycisku',
      type: 'text',
      required: false,
    },
    {
      name: 'buttonLink',
      label: 'Link przycisku',
      type: 'text',
      required: false,
    },
  ],
};
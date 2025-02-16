import type { Block } from 'payload';

export const Image: Block = {
  slug: 'image',
  interfaceName: 'image',
  fields: [
    {
      name: 'image',
      label: 'Obrazek',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
};
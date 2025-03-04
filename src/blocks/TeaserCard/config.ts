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
      name: 'icon',
      label: 'Ikona (font-awesome)',
      type: 'text',
      required: false,
    },
    {
      name: 'imagePosition',
      label: 'Pozycja zdjęcia',
      type: 'select',
      required: true,
      defaultValue: 'image-top',
      options: [
        { label: 'Lewo', value: 'image-left' },
        { label: 'Prawo', value: 'image-right' },
        { label: 'Góra', value: 'image-top' },
        { label: 'Dół', value: 'image-bottom' },
      ],
    },
    {
      name: 'styleVariant',
      label: 'Wariant styli',
      type: 'select',
      required: true,
      defaultValue: 'variant-1',
      options: [
        { label: 'Wariant 1', value: 'variant-1' },
        { label: 'Wariant 2', value: 'variant-2' },
        { label: 'Wariant 3', value: 'variant-3' },
        { label: 'Wariant 4', value: 'variant-4' },
      ],
    },
    {
      name: 'bg',
      label: 'Background color',
      type: 'select',
      required: true,
      defaultValue: 'transparent',
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

        { label: 'Transparent', value: 'transparent' },
      ],
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
import { Block, Field } from 'payload';
import { lexicalEditor, FixedToolbarFeature, HeadingFeature, InlineToolbarFeature } from '@payloadcms/richtext-lexical';

const richTextField: Field = {
  name: 'text',
  type: 'richText',
  label: 'Rich Text',
  required: true,
  editor: lexicalEditor({
    features: ({ rootFeatures }) => {
      return [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ];
    },
  }),
};

export const HeroBanner: Block = {
  slug: 'heroBanner',
  interfaceName: 'HeroBanner',
  fields: [
    richTextField,
    {
      name: 'buttons',
      label: 'Buttons',
      type: 'array',
      fields: [
        {
          name: 'buttonText',
          label: 'Button Text',
          type: 'text',
          required: true,
        },
        {
          name: 'buttonLink',
          label: 'Button Link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: 'select',
      required: false,
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
      ],
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'height',
      label: 'Height',
      type: 'select',
      required: true,
      defaultValue: 'md',
      options: [
        { label: 'Extra Small', value: 'xs' },
        { label: 'Medium', value: 'md' },
        { label: 'Extra Large', value: 'xl' },
      ],
    },
  ],
};

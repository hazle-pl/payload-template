import { Block, Field } from 'payload';
import { lexicalEditor, FixedToolbarFeature, HeadingFeature, InlineToolbarFeature } from '@payloadcms/richtext-lexical';

const richTextField: Field = {
  name: 'richText',
  type: 'richText',
  label: 'RichText',
  required: true,
  editor: lexicalEditor({
    features: ({ rootFeatures }) => {
      return [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ];
    },
  }),
};

export const RichTextComponent: Block = {
  slug: 'richTextBlock',
  interfaceName: 'RichTextBlock',
  fields: [
    richTextField,
  ],
};

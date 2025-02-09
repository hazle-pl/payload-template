import { Block, Field } from 'payload';
import { lexicalEditor, FixedToolbarFeature, HeadingFeature, InlineToolbarFeature } from '@payloadcms/richtext-lexical';

// Definiowanie pola RichText
const richTextField: Field = {
  name: 'richText', // Nazwa pola
  type: 'richText', // Typ pola - richText
  label: 'RichText', // Etykieta dla pola
  required: true, // Ustawiamy jako pole wymagane
  editor: lexicalEditor({
    features: ({ rootFeatures }) => {
      return [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }), // Nagłówki
        FixedToolbarFeature(), // Stały pasek narzędzi
        InlineToolbarFeature(), // Pasek narzędzi w linii
      ];
    },
  }),
};

export const RichTextComponent: Block = {
  slug: 'richTextBlock', // Unikalny identyfikator dla bloku
  interfaceName: 'RichTextBlock', // Nazwa interfejsu
  fields: [
    richTextField, // Dodajemy pole RichText do bloku
  ],
};

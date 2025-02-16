import type { GlobalConfig } from 'payload'
import { Grid } from '@/blocks/Grid/config'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'content',
      label: 'Bloki treści',
      type: 'blocks',
      blocks: [Grid],
    },
  ],
}

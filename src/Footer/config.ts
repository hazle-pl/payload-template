import type { GlobalConfig } from 'payload'
import { Grid } from '@/blocks/Grid/config'
import { revalidateFooter } from './hooks/revalidateFooter'

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
  hooks: {
    afterChange: [revalidateFooter],
  },
}

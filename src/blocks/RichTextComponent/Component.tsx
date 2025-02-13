import React from 'react'
import RichText from '@/components/RichText'

interface RichTextComponentProps {
  richText: any;
}

export const RichTextComponentBlock: React.FC<RichTextComponentProps> = ({ richText }) => {
  return (
    <div>
      <RichText data={richText} />
    </div>
  )
}
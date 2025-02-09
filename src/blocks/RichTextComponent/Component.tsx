import React from 'react'
import RichText from '@/components/RichText'

// Interfejs definiujący strukturę danych dla RichText
interface RichTextComponentProps {
  richText: any // Typ danych richText, może to być np. obiekt w formacie, który generuje Payload
}

export const RichTextComponentBlock: React.FC<RichTextComponentProps> = ({ richText }) => {
  return (
    <div>
      <RichText data={richText} />
    </div>
  )
}
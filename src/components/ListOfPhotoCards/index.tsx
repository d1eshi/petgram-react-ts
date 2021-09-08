import React from 'react'

import { PhotoCard } from '@/components/PhotoCard'

export function ListOfPhotoCards() {
  return (
    <ul>
      {[1, 2, 3].map(i => (
        <PhotoCard key={i} />
      ))}
    </ul>
  )
}

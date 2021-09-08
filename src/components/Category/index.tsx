import React from 'react'

import { Anchor, Image } from './style'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

interface CategoryProps {
  cover?: string
  emoji?: string
  path: string
}

export function Category({ cover = DEFAULT_IMAGE, emoji = '🤔', path = '' }: CategoryProps) {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}

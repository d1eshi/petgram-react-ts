import React from 'react'

import { SquareLoading, SquareInside } from './style'

export const Loader = () => {
  return (
    <SquareLoading>
      <SquareInside />
      <SquareInside />
      <SquareInside />
    </SquareLoading>
  )
}

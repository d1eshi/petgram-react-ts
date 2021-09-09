import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

import { Button, Img, ImgWrapper, Article } from './style'

interface PhotoCardProps {
  id?: any
  likes?: number
  src?: string
}

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }: PhotoCardProps) {
  const ref = React.useRef(null)
  const [show, setShow] = React.useState<boolean>(false)

  React.useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)

          observer.disconnect()
        }
      })

      observer.observe(ref.current)
    })
  }, [ref])

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size="2rem" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}

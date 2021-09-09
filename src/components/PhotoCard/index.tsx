import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { Button, Img, ImgWrapper, Article } from './style'

interface PhotoCardProps {
  id?: any
  likes?: number
  src?: string
}

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }: PhotoCardProps) {
  // to get a key unique for each element
  const key = `like-${id}`
  const ref = React.useRef(null)
  const [show, setShow] = React.useState<boolean>(false)

  // see if has been liked
  const [liked, setLiked] = React.useState(() => {
    try {
      const hasLiked = localStorage.getItem(key)

      return hasLiked
    } catch (error) {
      return false
    }
  })

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

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="2rem" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}

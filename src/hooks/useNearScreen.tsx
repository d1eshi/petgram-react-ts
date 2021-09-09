import React from 'react'

export function useNearScreen() {
  const element = React.useRef(null)
  const [show, setShow] = React.useState(false)

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

      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}

import React from 'react'

import { Category } from '../Category'

import { List, Item } from './style'

interface ICategories {
  id: number
  name: string
  emoji: string
  cover: string
  path: string
}

export function ListOfCategories() {
  const [categories, setCategories] = React.useState<ICategories[]>([])

  const [showFixed, setShowFixed] = React.useState(false)

  React.useEffect(() => {
    fetch('https://petgram-server-d1eshi.vercel.app/categories')
      .then(res => res.json())
      .then(setCategories)
  }, [])

  React.useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

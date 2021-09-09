import React from 'react'

import { Category } from '../Category'
import { Loader } from '../Loader'
import { useCategoriesData } from '../../hooks/useCategoriesData'

import { List, Item } from './style'

export function ListOfCategories() {
  const { categories, loading, error } = useCategoriesData()

  const [showFixed, setShowFixed] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List fixed={fixed}>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {loading && <Loader />}
      {error ? <p>Error!</p> : renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

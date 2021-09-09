import React from 'react'

interface ICategories {
  id: number
  name: string
  emoji: string
  cover: string
  path: string
}

export function useCategoriesData() {
  const [categories, setCategories] = React.useState<ICategories[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const getData = async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await fetch('https://petgram-server-d1eshi.vercel.app/categories')
      const data = await response.json()

      setCategories(data)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
      throw new Error(`Error to load data for categories. More info ${error}`)
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  return { categories, loading, error }
}

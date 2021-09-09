import React from 'react'
export const useLocalStorage = (key: string, initialValue: string) => {
  // see if has been liked
  const [storedValue, setValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key)

      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLocalStorage = (value: string) => {
    try {
      window.localStorage.setItem(key, value)
      setValue(value)
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }

  return [storedValue, setLocalStorage]
}

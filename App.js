import React, { useEffect, useState } from 'react'
import { Input, User, Container, Title, List, Hint } from './app/components'
import axios from 'axios'

const ENDPOINT = 'https://api.github.com/search/users?q='

const App = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(() => {
    const get = async () => {
      const response = await axios.get(`${ENDPOINT}${query}`)

      console.log(response?.data?.items)
      setResults(response?.data?.items || [])
    }

    query.length >= 3 && get()
  }, [query])

  const isSelected = (id) => {
    return selected.indexOf(id) > -1
  }

  const toggleUser = (id) => {
    const currentSelected = [...selected]

    !!isSelected(id)
      ? currentSelected.splice(currentSelected.indexOf(id), 1)
      : currentSelected.push(id)

    return setSelected(currentSelected)
  }

  return (
    <Container>
      <Title>Search GitHub users</Title>
      <Input value={query} onChangeText={(query) => setQuery(query)} />
      <Hint query={query} />
      <List
        data={results}
        keyExtractor={({ item }) => item?.id}
        renderItem={({ item }) => (
          <User
            data={item}
            selected={!!isSelected(item?.id)}
            toggle={() => toggleUser(item?.id)}
          />
        )}
      />
    </Container>
  )
}

export default App

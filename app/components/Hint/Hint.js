import React from 'react'
import styled from 'styled-components/native'

const Text = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #ccc;
  margin-bottom: 10px;
`

const Bold = styled(Text)`
  font-weight: bold;
  color: #aaa;
`

const Hint = ({ query }) => {
  return (
    <Text>
      <Bold>Tip: </Bold>{' '}
      {query.length < 3
        ? `Type 3 or more letters to search`
        : `Press and hold to visit the user's profile`}
    </Text>
  )
}

export default Hint

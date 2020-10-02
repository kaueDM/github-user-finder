import React from 'react'
import styled from 'styled-components/native'
import * as Linking from 'expo-linking'

const Container = styled.TouchableOpacity`
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding: 10px;
  background-color: ${({ selected }) => (selected ? '#abf7ad' : '#fff')};
  flex-direction: row;
`

const Info = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`

const Login = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

const Url = styled.Text`
  font-size: 15px;
  color: #bbb;
`

const Avatar = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 75px;
`

const User = ({ data, selected, toggle }) => {
  const { avatar_url, login, html_url } = data

  const openProfile = () => {
    return Linking.openURL(html_url)
  }

  return (
    <Container selected={selected} onPress={toggle} onLongPress={openProfile}>
      <Avatar source={{ uri: avatar_url }} />
      <Info>
        <Login>{login}</Login>
        <Url>{html_url}</Url>
      </Info>
    </Container>
  )
}

export default User

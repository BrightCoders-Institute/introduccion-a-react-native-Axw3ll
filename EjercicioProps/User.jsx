import { View, Text } from 'react-native'
import React from 'react'

const User = (props) => {
  return (
    <View>
      <Text>Hola soy {props.nombre} y estoy aprendido a pasar props!</Text>
    </View>
  )
}

export default User
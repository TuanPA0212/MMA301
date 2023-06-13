import { View, Text } from 'react-native'
import React from 'react'

const LittleLemonFooter = () => {
  return (
    <View
      style={{
        backgroundColor: '#FBDABB',
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  )
}

export default LittleLemonFooter
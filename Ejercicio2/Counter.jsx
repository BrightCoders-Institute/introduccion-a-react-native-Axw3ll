import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {
    const [Count,SetCount]= useState(0);
    const increment=()=>{
        SetCount(Count+1)
    }
    const decrement=()=>{
      if(Count>0){
          SetCount(Count-1)
      }
        
    }

    const reset=()=>{
        SetCount(0)
    }
  return (
    <View>
      <Text>count:{Count}</Text>
      <Button 
      title='Increment' 
      onPress={increment}/>
 
      <Button 
      title='Decrement' 
      onPress={decrement}/>
 
      <Button 
      title='Reset' 
      onPress={reset}/>
   
    </View>
  )
}
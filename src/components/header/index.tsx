import { View, Text, Pressable} from 'react-native'
import React from 'react'
import {Ionicons, Feather} from '@expo/vector-icons'


export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
        <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
            <Ionicons name="menu" size={24} color="#121212"/>
        </Pressable>

        <View className="flex flex-col items-center justify-center gap-1">
          <Text>Localização</Text>

          <View className="flex-row items-center justify-center gap-1">
            <Feather name="map-pin" size={14} color="#FF0000"/>
            <Text className="text-lg font-bold">Maringá</Text>
          </View>
        </View>

        <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
            <Feather name="bell" size={24} color="#121212"/>
            
        </Pressable>
    
    </View>
  )
}
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import CustomeTabs from '@/components/CustomeTabs'

const _layout = () => {
  return (
   <Tabs tabBar={CustomeTabs} screenOptions={{headerShown: false}}>
    <Tabs.Screen name="index"/>
    <Tabs.Screen name="statistics"/>
    <Tabs.Screen name="wallet"/>
    <Tabs.Screen name="profile"/>
   </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItem from '@/components/ProductItem'

const index = () => {
  return (
    <View style={styles.container}>
        <ProductItem /> 
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor: '#edeff7',
    }
})
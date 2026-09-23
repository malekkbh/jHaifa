import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItem from '@/components/ProductItem'
import Whatsapp_Item from '@/components/Whatsapp_Item';

const index = () => {

  console.log("inex");
  


  return (
    <View style={styles.container}>
       
       <Whatsapp_Item name="btata" />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor: 'red',
    }
})
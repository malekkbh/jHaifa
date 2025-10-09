import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CartItem = (props) => {
  const item = props.data.data;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={item.image} style={styles.img} />
        <Text>{item.name}</Text>
      </View>

      <Text style={styles.price}>
        {props.data.count} x {item.price}$ = {props.data.count*item.price}$
        </Text>


    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  img: {
    height: 70,
    width: 70,
    marginRight: 10
  },
  top:{
    flexDirection:'row', 
    alignItems:'center'
  } , 
  price:{
    fontSize:25 , 
    marginLeft: 10
  }
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import HaifaContext from "@/store/context";

//rnfes
const ProductScreen = () => {
  const params = useLocalSearchParams();
  const data = JSON.parse(params.data);
  const context = useContext(HaifaContext);

  const [count, setCount] = useState(1);

  // var count = 1;

  const onPlusPress = () => {
    // count = count +1 ;
    setCount(count + 1);
    console.log("count : ", count);
  };

  const onMinusPress = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onBuyPress = () => {
    const order_cart = context.cart
    .find((item) => 
      item.data.name == data.name);
    
    if (order_cart) {
      order_cart.count += count;
      context.setCart([...context.cart]);
      return;
    }

    const order = {
      data,
      count,
    };
    const cartCopy = context.cart;
    cartCopy.push(order);
    context.setCart(cartCopy);
  };

  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.img} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.name}>{data.price}$</Text>

      <View style={styles.counter}>
        <TouchableOpacity onPress={onPlusPress}>
          <Text style={styles.name}>+</Text>
        </TouchableOpacity>

        <Text style={styles.name}>{count}</Text>

        <TouchableOpacity onPress={onMinusPress}>
          <Text style={styles.name}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onBuyPress}>
        <Text style={styles.buy}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  name: {
    fontSize: 40,
  },
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  counter: {
    flexDirection: "row",
  },
  buy: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "900",
    padding: 7,
  },
});

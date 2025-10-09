import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import HaifaContext from "@/store/context";
import ProductItem from "@/components/ProductItem";
import CartItem from "@/components/CartItem";

const Cart = () => {
  const context = useContext(HaifaContext);
  const cart = context.cart;

  const calculate = () => {
    var sum = 0;
    cart.forEach((item) => {
      const price = item.data.price * item.count;
      sum = sum + price;
    });
    return sum;
  };

  const renderItems = () => {
    return cart.map((item1) => {
      // const item = item1.data;
      return <CartItem data={item1} />;
    });
  };

  return (
    <View>
      {renderItems()}
      <Text style={styles.total}>Total : {calculate()}$</Text>
      <TouchableOpacity>
        <Text>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  total: {
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 30,
  },
});

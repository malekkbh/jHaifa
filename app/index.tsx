import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import data from "@/constants/data";
import Card from "@/components/Card";
import ProductItem from "@/components/ProductItem";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const index = () => {
  const [filterData, setFilterData] = useState(data);
  const navigation = useNavigation();
  const renderItems = () => {
    return filterData.map((item) => {
      return (
        <ProductItem name={item.name} price={item.price} image={item.image} />
      );
    });
  };

  const onChangeText = (text: string) => {
    const filter = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
    setFilterData(filter);
  };

  return (
    <View>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
      />
      <EvilIcons
        onPress={() => navigation.navigate("Cart")}
        name="cart"
        size={30}
        color="black"
        style={styles.cart}
      />
      {renderItems()}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:"red" ,
    marginTop: 5,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
  },
  img: {
    width: 90,
    height: 90,
    marginRight: 20,
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    fontSize: 25,
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  cart: {
    marginLeft: 40,
  },
});

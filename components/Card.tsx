import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

//rnfes 

const Card = (props) => {
  const item = props.item || {};
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.name}>{" - " + item.price + "$"}</Text>
      {item.d_price < item.price && (
        <Text style={styles.name}>{" - " + item.d_price + "$"}</Text>
      )}
    </View>
  );
};

export default Card;

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
});

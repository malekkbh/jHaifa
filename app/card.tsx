import { Image, StyleSheet, Text, View } from "react-native";
import React from "react"
import Images from "../assets/images/Images"

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Code Zone</Text>
      <Text style={styles.time}> 15:56 </Text>
      <Image source={Images.logo} style={styles.logo} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
  },
  time: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  logo:{
    height: 200 , 
    width: 200 ,
    backgroundColor:'black'
  }
});

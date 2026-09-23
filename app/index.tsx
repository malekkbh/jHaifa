import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/Card";
import Whatsapp_Item from "@/components/Whatsapp_Item";
import Post from "@/components/Post";

const index = () => {
  const shawermaURI = "https://c8.alamy.com/comp/E90K52/chicken-lamb-shawerma-fast-food-meat-E90K52.jpg"
  const maqlobehURI = "https://images.squarespace-cdn.com/content/v1/64d82b053ba2795879510949/2d8226da-ef07-4c31-9e2e-bda4b72e87bb/Kattan+Cauliflower+Makloubeh.jpg"
  return (
    <View style={styles.continer}>
      <ScrollView>
        <Post userName="Shawerma" image={shawermaURI} liks={"1.2M"} />
        <Post userName="Mqlobeh" image ={maqlobehURI}/>
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },

  abc: {
    color: "red",
  },
  BD: {
    fontSize: 20,
    color: "red",
  },
  card: {
    width: 400,
    height: 300,
    borderWidth: 2,
  },
  red: {
    // backgroundColor:"red",
    borderWidth: 2,
    borderColor: "red",
    width: 400,
    height: 100,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  blue: {
    borderColor: "blue",
    width: 70,
    height: 70,
    borderWidth: 4,
  },
  green: {
    borderWidth: 4,
    borderColor: "green",
    width: 300,
    height: 70,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    top: 80,
  },
});

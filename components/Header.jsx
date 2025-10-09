import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Images from "@/assets/images/Images";

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={Images.plus} style={styles.icon} />
      <Image source={Images.camera} style={styles.icon} />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 10,
    // borderWidth:1
  },
  icon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
});

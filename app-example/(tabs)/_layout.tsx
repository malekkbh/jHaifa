import { StyleSheet, Text, View } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <View style={styles.conatiner}>
      <Text>Mary</Text>
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

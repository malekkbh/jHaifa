import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

//rnfes

const ContactItem = (props) => {
  const navigation = useNavigation();

  const [count , setCount] = useState(0)
  // var count = 7;

  const onAddPress = () => {
    // count = count + 1
    setCount(count + 1)

    console.log("count: ", count);
  }

  const onMinPress = () => {
    setCount(count - 1)
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate("chat")}>
      <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>
        <View style={styles.countContainer}>
          <Text onPress={onAddPress} style={styles.action}>+</Text>

          <Text style={styles.name}>{count}</Text>

          <Text onPress={onMinPress} style={styles.action}> - </Text>
        </View>
        <Ionicons name="person" size={40} color={props.color} />
      </View>
    </TouchableOpacity>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    // marginLeft: 30,
  },
  container: {
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  countContainer: {
    flexDirection: "row",
    alignItems:'center'
  },
  action:{
    marginLeft: 20 , 
    marginRight: 20 , 
    fontSize: 30 , 
  }
});

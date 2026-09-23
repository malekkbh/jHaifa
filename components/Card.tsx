import { Alert, Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { login_api } from "@/constants/api";
import { useNavigation } from "expo-router";

//rnfes

const Card = (props) => {
  const item = props.item || {};
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const navigateHome = () => {
    navigation.navigate("index");
  };

  const onLoginPress = () => {
    const body = {
      userName: name,
      pass: pass,
    };

    login_api(body).then((loginRes) => {
      if (loginRes.error) {
        Alert.alert(loginRes.errorMessage);
        return; // stop
      }

      if (!loginRes.valid) {
        Alert.alert("userName or pass is wrong");
        return;
      } else {
        navigateHome();
      }
    });
  };

  return (
    <View style={styles.card}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(txt) => setName(txt)}
      />
    
      <Text>{name}</Text>
      <Button title="clear" onPress={() => setName("")} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
  },
  card: {
    // flexDirection: "row",
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

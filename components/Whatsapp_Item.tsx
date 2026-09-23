import { Feather } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Whatsapp_Item = (props: any) => {
  const navigation = useRouter();

  const onChatPress = () => {
    const data = ""
    navigation.push("/Chat");
  };

  return (
    <TouchableOpacity
      style={styles.masg}
      onPress={() => onChatPress()}
    >
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{
            uri: "https://img.freepik.com/premium-vector/user-profile-icon-circle_1256048-12499.jpg?semt=ais_hybrid&w=740&q=80",
          }}
        />

        <View style={styles.contactContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{props.time}</Text>
          </View>

          <View style={styles.lastMessageContainer}>
            {props.status == "sent" ? (
              <Feather name="check" size={12} color="black" />
            ) : (
              <FontAwesome6 name="check-double" size={12} color="blue" />
            )}
            <Text>{props.msg}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Whatsapp_Item;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",

    margin: 10,
  },
  box: {
    height: 40,
    width: "80%",
    backgroundColor: "white",
    padding: 15,
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  text: {},
  masg: {
    height: 70,
    width: "80%",
    borderWidth: 1,
    flexDirection: "row",
    margin: 10,
    borderRadius: 20,
    //backgroundColor:"#000"
    alignItems: "center",
  },
  container: {
    // height: 70,
    // width: "80%",
    // borderWidth: 1,
    flexDirection: "row",
    // margin: 10,
    // borderRadius: 20,
    //backgroundColor:"#000"
    alignItems: "center",
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },

  contactContainer: {
    width: "80%",
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  lastMessageContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titletxet: {
    fontSize: 20,
    color: "#777777",
  },
  amro: {
    alignItems: "center",
    flexDirection: "row",
  },
});

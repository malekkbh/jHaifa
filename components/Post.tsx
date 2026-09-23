import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";

const Post = (props: any) => {
  const imageURI =
    "https://jessicainthekitchen.com/wp-content/uploads/2023/10/Batat-harra-14.jpg";
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="user" size={24} color="black" />
        <Text style={styles.name}>{props.userName}</Text>
      </View>
      <Image style={styles.image} source={{ uri: props.image || imageURI }} />
      <View style={styles.footer}>
        <View style={styles.iconTextContainer}>
          <MaterialIcons
            style={styles.icon}
            name="favorite"
            size={24}
            color="red"
          />
          <Text>{props.liks || 0}</Text>
        </View>
        <EvilIcons style={styles.icon} name="comment" size={24} color="black" />
        <Entypo
          style={styles.icon}
          name="share-alternative"
          size={24}
          color="black"
        />
        <Feather style={styles.icon} name="send" size={24} color="black" />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  header: {
    width: "85%",
    flexDirection: "row",
    // alignItems:'flex-start'
    justifyContent: "flex-start",
    // borderWidth:1
    marginBottom: 10,
  },
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    marginTop: 5,
    marginLeft: 10,
  },
  image: {
    width: "85%",
    height: 300,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "85%",
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 5
  },
});

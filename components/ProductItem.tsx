import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Images from "@/assets/images/Images";
import { useNavigation, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const ProductItem = (props) => {
  const router = useRouter();
  const navigation = useNavigation;
  const [isFavorate, setIsFavorate] = useState(false);

  const onItemPress = () => {
    const str = JSON.stringify(props);
    router.push({
      pathname: "/ProductScreen",
      params: { data: str },
    });
  };

  const onLikePress = () => {
    setIsFavorate(!isFavorate);
  };

  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => onItemPress()}
    >
      <View style={styles.container}>
        <Image source={props.image} style={styles.img} />
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.name}>{props.price}</Text>
        </View>
      </View>
      {isFavorate ? (
        <MaterialIcons
          name="favorite"
          size={30}
          color="red"
          onPress={onLikePress}
        />
      ) : (
        <MaterialIcons
          name="favorite-border"
          size={30}
          color="black"
          onPress={onLikePress}
        />
      )}
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',

    marginTop: 5,
    alignItems: "center",
    borderRadius: 15,
    paddingLeft: 10,
    flexDirection: "row",
  },
  name: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 3,
  },
  img: {
    width: 70,
    height: 70,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    width: "80%",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 5,
    padding: 8,
    alignItems: "center",
  },
});

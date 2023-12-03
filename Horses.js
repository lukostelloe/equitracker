import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FactureButton from "./FactureButton";
import Icon from "react-native-vector-icons/FontAwesome5";

const renderItem = ({ item }) => (
  <FactureButton club={item.club} horseName={item.horseName} />
);

function Horses() {
  const [horses, sethorses] = useState([
    {
      club: "La Passage",
      horseName: "Masca",
    },
    {
      club: "La Passage",
      horseName: "Bischon",
    },
    {
      club: "La Passage",
      horseName: "Killer",
    },
    {
      club: "La Loubiere",

      horseName: "Jumpy",
    },
    {
      club: "La Passage",
      horseName: "Hoppy",
    },
    {
      club: "La Loubiere",
      horseName: "Sweetie",
    },
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="plus" size={20} color="black" />
        <Text>Add new horse</Text>
      </TouchableOpacity>
      {horses.length != 0 && (
        <View>
          <FlatList data={horses} renderItem={renderItem} />
        </View>
      )}
    </View>
  );
}

export default Horses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "pink",
    flexDirection: "row",
    marginTop: 50,
  },
});

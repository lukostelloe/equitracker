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
  <FactureButton club={item.club} clientName={item.clientName} />
);

function Clients() {
  const [clients, setClients] = useState([
    {
      clientName: "Samuel",
      club: "La Passage",
    },
    {
      clientName: "Timothy",
      club: "La Passage",
    },
    {
      clientName: "Marie",
      club: "La Passage",
    },
    {
      clientName: "Luke",
      club: "La Passage",
    },
    {
      clientName: "Samantha",
      club: "La Passage",
    },
    {
      clientName: "Mark",
      club: "La Passage",
    },
  ]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="plus" size={20} color="black" />
        <Text>Add new client</Text>
      </TouchableOpacity>
      {clients.length != 0 && (
        <View>
          <FlatList data={clients} renderItem={renderItem} />
        </View>
      )}
    </View>
  );
}

export default Clients;

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

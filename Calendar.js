import { React, useState } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import FactureButton from "./FactureButton";

const renderItem = ({ item }) => (
  <FactureButton
    date={item.date}
    club={item.club}
    clientName={item.clientName}
    horseName={item.horseName}
  />
);

export default function Calendar() {
  const [factures, setFactures] = useState([
    {
      club: "La Passage",
      date: "2023/11/29",
      clientName: "Samuel",
      horseName: "Masca",
    },
    {
      club: "La Passage",
      date: "03/08/13",
      clientName: "Timothy",
      horseName: "Johnathan",
    },
    {
      club: "La Passage",
      date: "01/09/13",
      clientName: "Marie",
      horseName: "Killer",
    },
    {
      club: "La Passage",
      date: "11/09/13",
      clientName: "Luke",
      horseName: "Jumpy",
    },
    {
      club: "La Passage",
      date: "24/07/13",
      clientName: "Samuel",
      horseName: "Masca",
    },
    {
      club: "La Passage",
      date: "24/07/13",
      clientName: "Samuel",
      horseName: "Masca",
    },
  ]);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.inputsection}>
        <TouchableOpacity style={styles.button}>
          <Icon name="plus" size={20} color="black" />
          <Text>Add new facture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timebutton}>
          <Icon name="clock" size={20} color="black" />
          <Text>Today</Text>
          <Icon name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {factures.length != 0 && (
        <View>
          <FlatList data={factures} renderItem={renderItem} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  horseIcon: {
    margin: 10,
  },
  button: {
    backgroundColor: "#f9c2ff",
    width: 150,
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  timebutton: {
    backgroundColor: "#d3d3d3",
    width: 150,
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: "black",
  },
  inputsection: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    width: "100%",
  },
});

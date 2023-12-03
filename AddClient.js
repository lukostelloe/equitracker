import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

function AddClient() {
  const [clientNumberType, setClientNumberType] = useState("");
  const [clients, setClients] = useState([]);
  const navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate("AddHorses");
  };

  const handleClientPress = (clientName) => {
    if (clients.includes(clientName)) {
      // If the client is already in the list, remove it
      setClients(clients.filter((name) => name !== clientName));
    } else {
      // If the client is not in the list, add it
      setClients([...clients, clientName]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          clientNumberType === "Individual" && styles.selectedButton,
        ]}
        onPress={() => setClientNumberType("Individual")}
      >
        <Icon name="user-alt" size={20} color="black" />
        <Text>Individual</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          clientNumberType === "Group" && styles.selectedButton,
        ]}
        onPress={() => setClientNumberType("Group")}
      >
        <Icon name="user-friends" size={20} color="black" />
        <Text>Group</Text>
      </TouchableOpacity>

      <Text>Add Client Names</Text>
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            clients.includes("Samuel") && styles.selectedButton,
          ]}
          onPress={() => handleClientPress("Samuel")}
        >
          <Text>Samuel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            clients.includes("Mary") && styles.selectedButton,
          ]}
          onPress={() => handleClientPress("Mary")}
        >
          <Text>Mary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            clients.includes("Stephen") && styles.selectedButton,
          ]}
          onPress={() => handleClientPress("Stephen")}
        >
          <Text>Stephen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Add new club")}>
          <Text style={styles.addButton}>+ Add Client</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleNextPress}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    flexDirection: "row",
  },
  selectedButton: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "lightblue",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: 200,
  },
  addButton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
});

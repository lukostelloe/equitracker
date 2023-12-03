import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const horses = ["Jumpy", "Masca", "Killer"];

function AddHorses() {
  const [horseName, setHorseName] = useState("");
  const navigation = useNavigation();
  const [selectedHorses, setSelectedHorses] = useState(horses);

  const handleNextPress = () => {
    navigation.navigate("AddPayments");
  };

  const handleHorsePress = (horseName) => {
    if (selectedHorses.includes(horseName)) {
      // If the horse is already in the list, remove it
      setSelectedHorses(selectedHorses.filter((name) => name !== horseName));
    } else {
      // If the horse is not in the list, add it
      setSelectedHorses([...selectedHorses, horseName]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        {horses.map((horse) => (
          <TouchableOpacity
            key={horse}
            style={[
              styles.button,
              selectedHorses.includes(horse) && styles.selectedButton,
            ]}
            onPress={() => handleHorsePress(horse)}
          >
            <Text>{horse}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => console.log("Add new horse")}>
        <Text style={styles.addButton}>+ Add Horse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNextPress}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddHorses;

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

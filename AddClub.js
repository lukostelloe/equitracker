import React from "react";
import { useState, useRef } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const clubs = ["La Passage", "La Loubiere"];

function AddClub() {
  const [selectedClub, setSelectedClub] = useState(null);
  const navigation = useNavigation();
  const [addingClub, setAddingClub] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");

  const textInputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleNextPress = () => {
    navigation.navigate("AddClient");
  };

  return (
    <View style={styles.container}>
      {clubs.map((club) => (
        <TouchableOpacity key={club} onPress={() => setSelectedClub(club)}>
          <Text
            style={
              selectedClub === club ? styles.selectedButton : styles.button
            }
          >
            {club}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => console.log("Add new club")}>
        <Text onPress={handleFocus} style={styles.addButton}>
          + Add Club
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNextPress}>
        <Text>Next</Text>
      </TouchableOpacity>
      {isFocused && (
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          value={text}
          onChangeText={(inputText) => setText(inputText)}
          onBlur={handleBlur}
        />
      )}
    </View>
  );
}

export default AddClub;

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

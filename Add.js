import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  DatePickerIOS,
} from "react-native";

const clubs = ["La Passage", "La Loubiere"];
const previousClients = ["Client1", "Client2", "Client3"]; // You can replace this with your saved clients
const previousHorses = ["Horse1", "Horse2", "Horse3"]; // You can replace this with your saved horses

function Add({ addCard }) {
  const [date, setDate] = useState(new Date());
  const [selectedClub, setSelectedClub] = useState(null);
  const [clientName, setClientName] = useState("");
  const [horseName, setHorseName] = useState("");

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleAddCard = () => {
    // Construct the card object and call addCard function
    const newCard = {
      date: date.toDateString(),
      club: selectedClub,
      clientName,
      horseName,
    };

    addCard(newCard);

    // Reset the form fields
    setDate(new Date());
    setSelectedClub(null);
    setClientName("");
    setHorseName("");
  };

  return (
    <View style={styles.container}>
      {/* Date Picker */}
      <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
        <Text>Date: {date.toDateString() && <Text>Today</Text>}</Text>
      </TouchableOpacity>
      <Modal
        visible={isDatePickerVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.datePickerContainer}>
          {/* <DatePickerIOS
            mode="date"
            date={date}
            onDateChange={(newDate) => setDate(newDate)}
          /> */}
          <TouchableOpacity onPress={() => setDatePickerVisible(false)}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Club Buttons */}
      <Text>Club:</Text>
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
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>

      {/* ClientName Input */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            clientName === "Samuel" && styles.selectedButton,
          ]}
          onPress={() => setClientName("Samuel")}
        >
          <Text>Samuel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            clientName === "Mary" && styles.selectedButton,
          ]}
          onPress={() => setClientName("Mary")}
        >
          <Text>Mary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            clientName === "Stephen" && styles.selectedButton,
          ]}
          onPress={() => setClientName("Stephen")}
        >
          <Text>Stephen</Text>
        </TouchableOpacity>
        {/* Add more clients as needed */}
      </View>

      {/* HorseName Buttons */}
      <Text>Horse Name:</Text>
      <View style={styles.buttonGroup}>
        {previousHorses.map((horse) => (
          <TouchableOpacity
            key={horse}
            style={[
              styles.button,
              horseName === horse && styles.selectedButton,
            ]}
            onPress={() => setHorseName(horse)}
          >
            <Text>{horse}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter horse name"
        value={horseName}
        onChangeText={(text) => setHorseName(text)}
      />
      {/* Add Card Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text>Add Lesson</Text>
      </TouchableOpacity>
    </View>
  );
}

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

export default Add;

//options to choose=>
// date,
// club,
// individual (name) or group (option for names),
// duration, horse name (private or club),
// how much (paid or not paid)(cash or cheque or tranfser)

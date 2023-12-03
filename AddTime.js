import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import DatePicker from "react-native-modern-datepicker"; // Replace with your actual date picker library
import { getToday, getFormatedDate } from "react-native-modern-datepicker";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "./AppContext";

const AddTime = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate("AddClub");
  };
  const today = getToday(); // returns today's date.. e.g: 2019/10/12

  //Get formatted date from Date object or date string "2019/..."
  const formattedDateToday = getFormatedDate(today, "YYYY/MM/DD h:m");

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(today);
  const datepickerRef = useRef(null);

  const { state, dispatch } = useAppContext();
  const { lessonState, lessonDispatch } = useAppContext();

  const handleOnPress = () => {
    setOpen(!open);
  };

  const handleChange = (newDate) => {
    setSelectedDate(newDate);
    // Dispatch an action to update the date context
    // lessonDispatch({ type: "UPDATE_DATE", payload: newDate });
  };

  const handleChooseDate = () => {
    if (datepickerRef.current) {
      datepickerRef.current.open();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChooseDate} style={styles.dateButton}>
        <Text style={styles.dateButtonText}>Today: {today}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleOnPress} style={styles.chooseDateButton}>
        <Text style={styles.chooseDateButtonText}>Choose Date</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              selected={selectedDate}
              onSelectedChange={handleChange}
              ref={datepickerRef}
            />

            <TouchableOpacity
              onPress={handleOnPress}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View>
        <Text>{selectedDate}</Text>

        <Text>{lessonState.date} needs to be fixed</Text>
        <Text>Count: {state.count}</Text>

        <TouchableOpacity onPress={() => dispatch({ type: "INCREMENT" })}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch({ type: "DECREMENT" })}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleNextPress}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dateButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  dateButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  chooseDateButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  chooseDateButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%", // Adjusted width
    maxHeight: "80%", // Added maxHeight to limit height
  },
  closeButton: {
    backgroundColor: "#f44336",
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default AddTime;

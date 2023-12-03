// TestPage.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAppContext } from "./AppContext";

const TestPage = () => {
  const { state, dispatch, lessonState, lessonDispatch } = useAppContext();

  const handleUpdateLesson = () => {
    const updatedLessonState = {
      date: new Date().toISOString(), // for example, use the current date
      club: "Sample Club",
      individualOrGroup: "individual",
      clients: ["Client1", "Client2"],
      duration: 60,
      horseName: "Private",
      cost: 50,
    };

    lessonDispatch({ type: "UPDATE_LESSON", payload: updatedLessonState });
  };

  return (
    <View style={styles.container}>
      <Text>ID: {lessonState.id}</Text>
      <Text>Date: {lessonState.date}</Text>
      <Text>Club: {lessonState.club}</Text>
      <Text>Individual/Group: {state.individualOrGroup}</Text>
      <Text>
        Clients:{" "}
        {lessonState.clients ? lessonState.clients.join(", ") : "No clients"}
      </Text>
      <Text>Duration: {lessonState.duration}</Text>
      <Text>Horse Name: {lessonState.horseName}</Text>
      <Text>Cost: {lessonState.cost}</Text>

      <TouchableOpacity
        onPress={handleUpdateLesson}
        style={styles.updateButton}
      >
        <Text style={styles.updateButtonText}>Update Lesson State</Text>
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
  updateButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  updateButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default TestPage;

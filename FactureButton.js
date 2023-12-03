import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const DescriptionView = ({ children }) => {
  return <View style={styles.descview}>{children}</View>;
};

const isToday = (dateString) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
  const currentDay = currentDate.getDate();

  // Extract the year, month, and day parts from the provided dateString
  const [year, month, day] = dateString.split("/").map(Number);

  return currentYear === year && currentMonth === month && currentDay === day;
};

function FactureButton({ date, club, clientName, horseName }) {
  return (
    <View style={styles.list}>
      {/* {isToday(date) && <Text>today</Text>} */}
      <View style={styles.view}>
        <View>
          {date && (
            <DescriptionView>
              <Icon
                name="calendar-day"
                size={20}
                color="black"
                style={styles.icon}
              />
              <Text>{date}</Text>
            </DescriptionView>
          )}
          {club && (
            <DescriptionView>
              <Icon
                name="archway"
                size={20}
                color="black"
                style={styles.icon}
              />
              <Text>{club}</Text>
            </DescriptionView>
          )}
          {clientName && (
            <DescriptionView>
              <Icon
                name="grin-alt"
                size={20}
                color="black"
                style={styles.icon}
              />
              <Text>{clientName}</Text>
            </DescriptionView>
          )}
          {horseName && (
            <DescriptionView>
              <Icon name="horse" size={20} color="black" style={styles.icon} />
              <Text>{horseName}</Text>
            </DescriptionView>
          )}
        </View>
        <Icon
          name="chevron-right"
          size={20}
          color="black"
          style={styles.icon}
        />
      </View>
    </View>
  );
}

export default FactureButton;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    width: 350,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16, // Slightly reduced padding
  },
  descview: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F0F0F0",
    margin: 1,
    padding: 8, // Slightly reduced padding
    borderRadius: 8,
  },
  icon: {
    marginRight: 8, // Slightly reduced margin
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  chevronIcon: {
    marginLeft: 12, // Slightly increased margin
  },
  list: {
    alignItems: "center",
  },
});

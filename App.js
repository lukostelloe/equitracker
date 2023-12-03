import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./Settings";
import Clients from "./Clients";
import Calendar from "./Calendar";
import Horses from "./Horses";
import Icon from "react-native-vector-icons/FontAwesome5";
import AddTime from "./AddTime";
import AddClub from "./AddClub";
import AddClient from "./AddClient";
import AddHorses from "./AddHorses";
import Test from "./Test";
import { createStackNavigator } from "@react-navigation/stack";
import { AppProvider } from "./AppContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabIcons = {
  Calendar: "calendar",
  Clients: "archway",
  Add: "plus",
  Horses: "horse",
  Settings: "cog",
};

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = tabIcons[route.name];
          const iconColor = route.name === "Add" ? "red" : color;
          return <Icon name={iconName} size={20} color={iconColor} />;
        },
        tabBarStyle: { backgroundColor: "#f0f0f0" },
        tabBarItemStyle: {
          backgroundColor: route.name === "Add" ? "grey" : "transparent",
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          color: route.name === "Add" ? "red" : "black",
        },
      })}
    >
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Add" component={AddTime} />
      <Tab.Screen name="Horses" component={Horses} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Test" component={Test} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddTime">
          <Stack.Screen name="AddTime" component={MainScreen} />
          <Stack.Screen name="AddClub" component={AddClub} />
          <Stack.Screen name="AddClient" component={AddClient} />
          <Stack.Screen name="AddHorses" component={AddHorses} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

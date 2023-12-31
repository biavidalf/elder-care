import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { Landing } from "./src/screens/Landing";
import { SignUp } from "./src/screens/SignUp";
import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";
import { Profile } from "./src/screens/Profile";
import { Drugs } from "./src/screens/Drugs";
import { Nutrition } from "./src/screens/Nutrition";
import { Precautions } from "./src/screens/Precautions";

import { IconHome, IconPill, IconStetoscope } from "./src/components/Icons";
import { WeekDayContextProvider } from "./src/contexts/WeekDayContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <WeekDayContextProvider>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <IconHome size={20} color={focused ? "#2C72DA" : "#8696BB"} />
            ),
          }}
        />

        <Tab.Screen
          name="Drugs"
          component={Drugs}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <IconPill size={21} color={focused ? "#2C72DA" : "#8696BB"} />
            ),
          }}
        />

        <Tab.Screen
          name="Nutrition"
          component={Nutrition}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="restaurant-outline"
                size={20}
                color={focused ? "#2C72DA" : "#8696BB"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Precautions"
          component={Precautions}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <IconStetoscope
                size={20}
                color={focused ? "#2C72DA" : "#8696BB"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </WeekDayContextProvider>
  );
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={MyTabs} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

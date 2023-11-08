import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { Landing } from "./src/screens/Landing";
import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";
import { Perfil } from "./src/screens/Perfil";
import { Drugs } from "./src/screens/Drugs";
import { Nutricao } from "./src/screens/Nutricao";
import { Cuidados } from "./src/screens/Cuidados";

import { IconHome, IconPill, IconStetoscope } from "./src/components/Icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { WeekDayContextProvider } from "./src/contexts/WeekDayContext";

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
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <IconHome size={20} color="#2C72DA" />
              ) : (
                <IconHome size={20} color="#8696BB" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Drugs"
          component={Drugs}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <IconPill size={21} color="#2C72DA" />
              ) : (
                <IconPill size={21} color="#8696BB" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Nutricao"
          component={Nutricao}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="restaurant-outline" size={20} color="#2C72DA" />
              ) : (
                <Ionicons name="restaurant-outline" size={20} color="#8696BB" />
              );
            },
          }}
        />

        <Tab.Screen
          name="Cuidados"
          component={Cuidados}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <IconStetoscope size={20} color="#2C72DA" />
              ) : (
                <IconStetoscope size={20} color="#8696BB" />
              );
            },
          }}
        />
      </Tab.Navigator>
    </WeekDayContextProvider>
  );
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={MyTabs} />
      <Stack.Screen name="Perfil" component={Perfil} />
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

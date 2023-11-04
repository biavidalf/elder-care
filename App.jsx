import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './src/pages/Login';
import PerfilScreen from './src/pages/Perfil';
import HomeScreen from './src/pages/Home';
import MedicamentosScreen from './src/pages/Medicamentos';
import NutricaoScreen from './src/pages/Nutricao';
import CuidadosScreen from './src/pages/Cuidados';

import { IconHome, IconPill, IconStetoscope } from './src/components/Icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        name="Medicamentos"
        component={MedicamentosScreen}
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
        component={NutricaoScreen}
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
        component={CuidadosScreen}
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
  );
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={MyTabs} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

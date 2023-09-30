import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RegisterScreen from "../screens/RegisterScreen";
import { StackScreenProps, createStackNavigator } from "@react-navigation/stack";
import TabBar from "./tabbar.navigation";
import DetailScreen from "../screens/DetailScreen";

type Item = {
  // Définissez ici la structure de l'objet "item"
  // Par exemple :
  id: number;
  name: string;
  description: string; };
  // ... d'autres prop
type RootStackParamList = {
  DetailScreen: {
    item: Item;
  };
  WelcomeScreen: { userId: any };
  RegisterScreen: { sort: 'latest' | 'top' } | undefined;
  Tabbar: {name : 'Profile' | 'Chat Host' | 'Home' | 'My order' | 'Save';}; // Ajout de Tabbar dans la liste des écrans possibles
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RegisterScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Tabbar" component={TabBar} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type Props = StackScreenProps<
  RootStackParamList,
  'RegisterScreen'
>;
export type ProfileScreenNavigationProp = Props['navigation'];

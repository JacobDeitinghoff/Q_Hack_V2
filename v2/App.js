const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import EmergencyChatSend from "./components/EmergencyChatSend";
import IPhone1415ProMax from "./screens/IPhone1415ProMax";
import Chat from "./components/Chat";
import EmergencyChatWriting from "./components/EmergencyChatWriting";
import Profile from "./components/Profile";
import Main from "./components/Main";
import KrankenhausWahl from "./components/KrankenhausWahl";
import KrankenhausView from "./components/KrankenhausView";
import Number1 from "./components/Number1";
import QR from "./components/QR";
import User1Image2 from "./components/User1Image2";
import User1Image5 from "./components/User1Image5";
import SpeechBubbleImage6 from "./components/SpeechBubbleImage6";
import WarningTriangleImage from "./components/WarningTriangleImage";
import WarningTriangleImage2 from "./components/WarningTriangleImage2";
import VectorIcon from "./components/VectorIcon";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <VectorIcon />,
    <User1Image2 />,
    <WarningTriangleImage2 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <SpeechBubbleImage6 />,
    <User1Image5 />,
    <WarningTriangleImage />,
  ]);
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        //tabBar={({state, descriptors, navigation})≈>
        // Customize your icons based on the page and focused status
        let iconName;
        if (route.name === 'Page1') {
          iconName = focused ? 'icon1-focused' : 'icon1';
        } else if (route.name === 'Page2') {
          iconName = focused ? 'icon2-focused' : 'icon2';
        } else if (route.name === 'Page3') {
          iconName = focused ? 'icon3-focused' : 'icon3';
        }

        // Return a custom component for icons
        
      },
    })}
  >
    <Tab.Screen name="Chat" component={Chat} options={{tableBarIcon: ({}) => (
      <CustomIcon component={SpeechBubbleImage6} />
    )}}/>
    <Tab.Screen name="Main" component={Main} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
    
 
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <BottomTabsRoot />
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

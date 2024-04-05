import { FirstScreen } from "@/screens/FirstScreen";
import { SecondScreen } from "@/screens/SecondScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Drama, Drill } from "@tamagui/lucide-icons";
import { useTheme, XStack } from "tamagui";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          shadowColor: "transparent",
        },
        tabBarBackground: () => <XStack f={1} backgroundColor="$background" />,
        tabBarActiveTintColor: theme.accentColor.val,
      }}
    >
      <Tab.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          tabBarIcon: () => <Drama />,
        }}
      />
      <Tab.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          tabBarIcon: () => <Drill />,
        }}
      />
    </Tab.Navigator>
  );
};

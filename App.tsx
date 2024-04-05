import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StatusBar as RNStatusBar } from "react-native";
import { useState } from "react";
import { TamaguiProvider, Theme, XStack, YStack } from "tamagui";
import config from "./tamagui.config";
import { User } from "@/components/User/User";
import { ChangeTheme } from "@/components/ChangeTheme/ChangeTheme";
import Routes from "@/routes";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={isDarkTheme ? "dark" : "light"}>
        <StatusBar style={isDarkTheme ? "light" : "dark"} />
        <YStack flex={1} bg="$background" pt={RNStatusBar.currentHeight}>
          <XStack justifyContent="space-between" alignItems="center">
            <User />
            <ChangeTheme onCheckedChange={setIsDarkTheme} />
          </XStack>
          <Routes />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}

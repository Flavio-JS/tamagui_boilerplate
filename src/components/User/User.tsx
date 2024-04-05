import { Avatar, H4, Text, XStack, YStack } from "tamagui";

export const User = () => {
  return (
    <XStack gap="$3">
      <Avatar size="$5" circular>
        <Avatar.Image src="https://github.com/Flavio-JS.png" />
        <Avatar.Fallback backgroundColor="$gray5" />
      </Avatar>

      <YStack gap="$-1.5">
        <Text color="$gray10">Olá,</Text>
        <H4 fontWeight="bold">Flávio</H4>
      </YStack>
    </XStack>
  );
};

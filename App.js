import React from "react";
import { NativeBaseProvider, HStack, Text, Center } from "native-base";
import Github from "./Github";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center>
        <HStack bg="#0066ff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="400">
          <HStack alignItems="center" px="12" py="3" >
            <Text color="white" fontSize="23" fontWeight="bold">
              Find GitHub Users Here!
            </Text>
          </HStack>
        </HStack>

      </Center>
      <Github />
    </NativeBaseProvider>
  );
}
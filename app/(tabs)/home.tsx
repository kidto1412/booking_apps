import { Button } from "@/components/ui/button";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-svg";

export default function HomePage() {
  return (
    <SafeAreaView>
      <Button className="text-white">
        <Text>Hello</Text>
      </Button>
    </SafeAreaView>
  );
}

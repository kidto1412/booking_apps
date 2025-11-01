import React from "react";
import { ScrollView, Text } from "react-native";

import { ChevronDown, SlidersHorizontal } from "lucide-react-native";
import { Button } from "./button";
import { HStack } from "./hstack";
import { Icon } from "./icon";

export default function FilterScroll() {
  const filters = [
    { id: 1, label: "Short", icon: SlidersHorizontal },
    { id: 2, label: "Price", icon: ChevronDown },
    { id: 3, label: "Range area", icon: ChevronDown },
    { id: 4, label: "Category", icon: ChevronDown },
    { id: 5, label: "Rating", icon: ChevronDown },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      className="mt-3"
    >
      <HStack space="md">
        {filters.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            size="sm"
            className="rounded-full border-gray-300 bg-white px-4 py-2 flex-row items-center"
          >
            {item.id === 1 ? (
              <Icon as={item.icon} size="sm" color="black" className="mr-1" />
            ) : null}
            <Text className="text-gray-800 text-sm font-medium mr-1">
              {item.label}
            </Text>
            {item.id !== 1 && <Icon as={ChevronDown} size="sm" color="gray" />}
          </Button>
        ))}
      </HStack>
    </ScrollView>
  );
}

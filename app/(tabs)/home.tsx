import HorizontalProduct from "@/components/HorizontalProduct";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import CategoryScroll from "@/components/ui/CategoryScroll";
import { HStack } from "@/components/ui/hstack";
import { BellIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { MapPin } from "lucide-react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  return (
    <SafeAreaView className="p-5">
      <HStack className="items-center justify-between">
        {/* Left Section */}
        <HStack className="items-center">
          <Avatar size="md">
            <AvatarImage
              source={{
                uri: "https://randomuser.me/api/portraits/women/45.jpg",
              }}
            />
          </Avatar>

          <VStack className="ml-3">
            <Text className="text-base font-semibold text-gray-900">
              Stephanie Sharkey
            </Text>
            <HStack className="items-center mt-0.5">
              <MapPin color={"orange"} />
              <Text className="text-sm text-gray-500 ml-2">
                Ringinasri giwanggan XII, Bogor
              </Text>
            </HStack>
          </VStack>
        </HStack>

        {/* Notification Icon */}

        <Box className="relative">
          <Icon as={BellIcon} size="xl" color="black" />
        </Box>
      </HStack>
      <Box className="mt-5 p-5">
        <CategoryScroll />
      </Box>
      <Box>
        <HorizontalProduct />
      </Box>
      <Box>
        <HorizontalProduct />
      </Box>
    </SafeAreaView>
  );
}

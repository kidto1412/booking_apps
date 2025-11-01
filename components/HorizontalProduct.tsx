import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { MapPin, Star } from "lucide-react-native";
import { Badge } from "./ui/badge";
import { Box } from "./ui/box";
import { HStack } from "./ui/hstack";
import { Icon } from "./ui/icon";

export default function HorizontalProduct() {
  const hotels = [
    {
      id: 1,
      name: "Aurelia Grand",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
      rating: 4.8,
      reviews: 345,
      price: "$550 - $950",
      address: "Batutilis PD No.153, Bogor",
      top: true,
    },
    {
      id: 2,
      name: "Lumière Palace",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
      rating: 5.0,
      reviews: 1200,
      price: "$750 - $990",
      address: "Jl. Dr. H. Makmur No.6, Bandung",
      top: false,
    },
  ];

  return (
    <View className="mt-5">
      <HStack className="justify-between items-center px-4 mb-3">
        <Text className="text-lg font-semibold text-gray-900">
          Popular hotel
        </Text>
        <Text className="text-sm text-blue-600 font-medium">View more</Text>
      </HStack>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {hotels.map((hotel) => (
          <Box
            key={hotel.id}
            className="mr-4 w-64 rounded-2xl bg-white shadow-sm overflow-hidden"
          >
            <View className="relative">
              <Image
                source={{ uri: hotel.image }}
                className="w-full h-40"
                resizeMode="cover"
              />
              {hotel.top && (
                <Badge className="absolute top-2 left-2 bg-yellow-100 rounded-full px-3 py-1">
                  <Text className="text-yellow-600 text-xs font-medium">
                    🏷️ Top hotel
                  </Text>
                </Badge>
              )}
            </View>

            <Box className="p-3">
              <Text className="text-base font-semibold text-gray-900">
                {hotel.name}
              </Text>

              <HStack className="items-center mt-1">
                <Icon as={Star} size="sm" color="orange" />
                <Text className="text-sm ml-1 text-gray-700">
                  {hotel.rating}{" "}
                  <Text className="text-gray-500">
                    ({hotel.reviews} reviews)
                  </Text>
                </Text>
              </HStack>

              <Text className="text-sm text-gray-700 mt-1">
                💰 Rate price {hotel.price}
              </Text>

              <HStack className="items-center mt-1">
                <Icon as={MapPin} size="sm" color="gray" />
                <Text
                  className="text-sm text-gray-600 ml-1"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {hotel.address}
                </Text>
              </HStack>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </View>
  );
}

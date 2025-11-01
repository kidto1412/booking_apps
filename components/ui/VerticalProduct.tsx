import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { MapPin, Star } from "lucide-react-native";
import { Badge } from "./badge";
import { Box } from "./box";
import { HStack } from "./hstack";
import { Icon } from "./icon";

export default function VerticalProduct() {
  const hotels = [
    {
      id: 1,
      name: "Solstice Royale",
      image:
        "https://images.unsplash.com/photo-1576675784426-c9c9a7f2f8b1?auto=format&fit=crop&w=800&q=60",
      rating: 4.5,
      reviews: 423,
      price: "$170 - $495/night",
      address: "Jl. Babakansari wetan St No.153, Bogor",
    },
    {
      id: 2,
      name: "Celestine Haven",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
      rating: 4.9,
      reviews: 345,
      price: "$725 - $820/night",
      address: "Jl. Sritanjung Utara No.11, Ngagelrejo, Surabaya",
    },
    {
      id: 3,
      name: "Tropicana Bliss",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      rating: 4.7,
      reviews: 546,
      price: "$530 - $950/night",
      address: "Jl. Panda Putih No.163-165, Bogor Barat",
    },
    {
      id: 4,
      name: "Coralia Retreat",
      image:
        "https://images.unsplash.com/photo-1582719478175-2d5b2a90b1a0?auto=format&fit=crop&w=800&q=60",
      rating: 4.8,
      reviews: 545,
      price: "$230 - $650/night",
      address: "Jl. Sentosa Makmur No.235, Jakarta",
    },
    {
      id: 5,
      name: "Coralia Retreat",
      image:
        "https://images.unsplash.com/photo-1582719478175-2d5b2a90b1a0?auto=format&fit=crop&w=800&q=60",
      rating: 4.8,
      reviews: 545,
      price: "$230 - $650/night",
      address: "Jl. Sentosa Makmur No.235, Jakarta",
    },
    {
      id: 6,
      name: "Coralia Retreat",
      image:
        "https://images.unsplash.com/photo-1582719478175-2d5b2a90b1a0?auto=format&fit=crop&w=800&q=60",
      rating: 4.8,
      reviews: 545,
      price: "$230 - $650/night",
      address: "Jl. Sentosa Makmur No.235, Jakarta",
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 16 }}
    >
      {hotels.map((hotel) => (
        <HStack
          key={hotel.id}
          className="mb-5 bg-white rounded-2xl p-3 shadow-sm"
          space="md"
        >
          {/* Gambar hotel */}
          <View className="relative">
            <Image
              source={{ uri: hotel.image }}
              className="w-24 h-24 rounded-2xl"
              resizeMode="cover"
            />
            <Badge className="absolute top-1 left-1 bg-yellow-100 rounded-full px-2 py-1">
              <Text className="text-xs text-yellow-700 font-medium">
                ⭐ Top
              </Text>
            </Badge>
          </View>

          {/* Detail hotel */}
          <Box className="flex-1 justify-center">
            <Text className="text-base font-semibold text-gray-900">
              {hotel.name}
            </Text>

            <HStack className="items-center mt-1">
              <Icon as={Star} size="sm" color="orange" />
              <Text className="text-sm ml-1 text-gray-700">
                {hotel.rating}{" "}
                <Text className="text-gray-500">({hotel.reviews} reviews)</Text>
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
        </HStack>
      ))}
    </ScrollView>
  );
}

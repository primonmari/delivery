import { Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import RestaurantItem from "./horizontal";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}
export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.18.13:3000/restaurants"); //modifica o localhost pelo Ipv4 do pc
      const data = await response.json();
      console.log(data);
      setRestaurants(data);
    }

    getFoods();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

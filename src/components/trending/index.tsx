import {useState, useEffect} from 'react';
import {FlatList, View } from 'react-native';
import {CardHorizontalFood} from './food';

export interface FoodProps{
  id:string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;

}
export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([]);

    useEffect(() => {
      async function getFoods() {
        const response = await fetch("http://192.168.18.13:3000/foods") //modifica o localhost pelo Ipv4 do pc
        const data = await response.json()
        console.log(data);
        setFoods(data);
        
      }

      getFoods();

    }, [])

 return (
   <FlatList
        data={foods}
        renderItem={ ({item}) => <CardHorizontalFood food={item}/>}
        horizontal={true}
        contentContainerStyle={{gap: 14, paddingLeft:16, paddingRight: 16}}
        showsHorizontalScrollIndicator={false}

    
    />
    
    
 
  );

  
}
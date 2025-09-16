import {InMemoryDbService} from 'angular-in-memory-web-api';
import { IHotel } from '../models/hotel';

export class HotelData implements InMemoryDbService {

  createDb(): Record<string, IHotel[]> {
    const hotels: IHotel[] = [
    {
      id : 1,
      hotelName : "Buea sweet life",
      description : "Belle vue au bord de la mer",
      price : 20000,
      imageUrl : "assets/img/hotel-room.jpg",
      rating : 5
    },
    {
      id : 2,
      hotelName : "Marrakech",
      description : "Profitez de la vue sur les montagnes",
      price : 14000,
      imageUrl : "assets/img/the-interior.jpg",
      rating : 3
    },
    {
      id : 3,
      hotelName : "Sunset Paradise",
      description : "Admirez des couchers de soleil spectaculaires",
      price : 17000,
      imageUrl : "assets/img/indoors.jpg",
      rating : 3.5
    },
    {
      id : 4,
      hotelName : "Ocean Breeze",
      description : "Séjour relaxant avec brise marine et vue imprenable sur l’océan",
      price : 10000,
      imageUrl : "assets/img/window.jpg",
      rating : 2.5
    },
    {
      id : 5,
      hotelName : "cape town city",
      description : "Vivez l’effervescence de la ville tout en profitant du confort moderne",
      price : 25000,
      imageUrl : "assets/img/hotel-terrasse.jpg",
      rating : 4
    },
    {
      id : 6,
      hotelName : "Lakeside Escape",
      description : "Séjournez dans un bâtiment historique restauré, ambiance élégante et chaleureuse",
      price : 25000,
      imageUrl: "assets/img/hotel-luxe.jpg",
      rating : 5
    }
    ];

    return {hotels};
  }

  genId(hotels: IHotel[]): number {
    return hotels.length > 0 ? Math.max(... hotels.map(hotel => hotel.id!)) + 1 : 1;
  }

}

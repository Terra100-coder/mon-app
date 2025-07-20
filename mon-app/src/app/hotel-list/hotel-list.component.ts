import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";

@Component({
  selector : 'app-hotel-list',
  templateUrl : './hotel-list.component.html',
  styleUrls : ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {

  ngOnInit(): void {
    console.log('Mon niveau de vie initial fonctionne');

  }

  public title = 'Liste hotels';

  public hotels: IHotel[] = [
    {
      hotelId : 1,
      hotelName : 'Buea sweet life',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/hotel-room.jpg'
    },
    {
      hotelId : 2,
      hotelName : 'Marrakech',
      description : 'Profitez de la vue sur les montagnes',
      price : 145.5,
      imageUrl: 'assets/img/the-interior.jpg'
    },
    {
      hotelId : 3,
      hotelName : 'Buea sweet life',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/indoors.jpg'
    },
    {
      hotelId : 4,
      hotelName : 'cape town city',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/window.jpg'
    },
    {
      hotelId : 5,
      hotelName : 'cape town city',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/hotel-terrasse.jpg'
    },
    {
      hotelId : 6,
      hotelName : 'cape town city',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/hotel-luxe.jpg'
    }
  ];

  public showBadge: boolean = false;

  public hotelFilter = 'mot';

  public toogleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }
}

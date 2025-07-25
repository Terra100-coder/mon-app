import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";

@Component({
  selector : 'app-hotel-list',
  templateUrl : './hotel-list.component.html',
  styleUrls : ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {

  ngOnInit(): void {
    this.filteredHotels = this.hotels;

    this.hotelFilter = '';

  }

  public title = 'Liste hôtels';

  public hotels: IHotel[] = [
    {
      hotelId : 1,
      hotelName : 'Buea sweet life',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/hotel-room.jpg',
      rating : 3.5
    },
    {
      hotelId : 2,
      hotelName : 'Marrakech',
      description : 'Profitez de la vue sur les montagnes',
      price : 145.5,
      imageUrl: 'assets/img/the-interior.jpg',
      rating : 5
    },
    {
      hotelId : 3,
      hotelName : 'Buea sweet life',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/indoors.jpg',
      rating : 2
    },
    {
      hotelId : 4,
      hotelName : 'cape town city',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/window.jpg',
      rating : 2.5
    },
    {
      hotelId : 5,
      hotelName : 'cape town city',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/hotel-terrasse.jpg',
      rating : 3
    },
    {
      hotelId : 6,
      hotelName : 'cape town city',
      description : 'Belle vue au bord de la mer',
      price : 230.5,
      imageUrl: 'assets/img/hotel-luxe.jpg',
      rating : 5
    }
  ];

  public showBadge: boolean = false;

  private _hotelFilter = 'mot';

  public filteredHotels : IHotel[] = [];

  public receivedRating!: string;

  public toogleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter() : string {
    return this._hotelFilter;
  }

  public set hotelFilter(filtre : string) {
    this._hotelFilter = filtre;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  receiveRatingClicked(message: string): void {
    this.receivedRating = message;
  }


  private filterHotels(criteria: string): IHotel[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1
    );
    return res;
  }


}

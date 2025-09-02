import { Component, OnInit } from "@angular/core";
import { IHotel } from "../shared/models/hotel";
import { HotelListService } from "../shared/services/hotel-list.service";

@Component({
  selector : 'app-hotel-list',
  templateUrl : './hotel-list.component.html',
  styleUrls : ['./hotel-list.component.css'],
})

export class HotelListComponent implements OnInit {


  public title = 'Liste hôtels';

  public hotels: IHotel[] = [];

  public showBadge: boolean = false;

  private _hotelFilter = 'mot';

  public filteredHotels : IHotel[] = [];

  public receivedRating!: string;

  public errMsg!: string;

  constructor(private hotelListService: HotelListService){

  }

  ngOnInit(): void {
    this.hotelListService.getHotels().subscribe({
      next: hotels => {
        this.hotels = hotels,
        this.filteredHotels = this.hotels;
      } ,
      error: err => this.errMsg = err
    });
    this.hotelFilter = '';
  }

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

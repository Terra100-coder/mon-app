import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelListService } from '../shared/services/hotel-list.service';
import { IHotel } from '../shared/models/hotel';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {

  public hotelForm!: FormGroup;

  public hotel!: IHotel;

  public pageTitle!: String;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelListService
   ) { }

  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      hotelName: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      description: ['']
    });


    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;

      this.getSelectedHotel(id);

    })
  }

  public get tags(): FormArray {
    return this.hotelForm.get('tags') as FormArray;
  }

  public addTags(): void {
    this.tags.push(new FormControl());
  }

  public deleteTags(index: number): void {
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }

  public getSelectedHotel(id: number): void {
    this.hotelService.getHotelById(id).subscribe((hotel: IHotel | undefined) => {
      this.displayHotel(hotel!);
    });
  }

  public displayHotel(hotel: IHotel): void {
    this.hotel = hotel;

    if (this.hotel.id === 0) {
      this.pageTitle = 'Créer un hôtel';
    } else {
      this.pageTitle = `Modifier l'hôtel ${this.hotel.hotelName}`;
    }

    this.hotelForm.patchValue({
      hotelName: this.hotel.hotelName,
      price: this.hotel.price,
      rating: this.hotel.rating,
      description: this.hotel.description,
      tags: this.fb.array([])
    });
  }

  saveHotel(): void {
  if (this.hotelForm.valid) {
    if (this.hotelForm.dirty) {
      const hotel: IHotel = {
        ...this.hotel,
        ...this.hotelForm.value
      };

      if (hotel.id === 0) {
        this.hotelService.createHotel(hotel).subscribe({
          next: () => this.saveCompleted()
        });
      } else {
        this.hotelService.updateHotel(hotel).subscribe({
          next: () => this.saveCompleted()
        });
      }
    } else {
      console.log('Aucune modification détectée.');
    }
  } else {
    this.hotelForm.markAllAsTouched();
    console.log('Formulaire invalide', this.hotelForm.errors);
  }
  console.log(this.hotelForm.value);
}


  public saveCompleted(): void {
    this.hotelForm.reset();
    this.router.navigate(['/hotels']);
  }

  public deleteHotel() {
    if (confirm(`Voulez-vous vraiment supprimer ${this.hotel.hotelName}`)) {
      this.hotelService.deleteHotel(this.hotel.id!).subscribe({
        next: () => this.saveCompleted()
      });
    }
  }

}

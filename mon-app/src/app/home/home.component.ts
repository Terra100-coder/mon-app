import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Hôtel inventé pour la page d'accueil
  grandHotel = {
    id: 99,
    name: 'Nos Hôtels',
    description: 'Plongez dans le luxe absolu avec des suites somptueuses, une piscine à débordement, et des services personnalisés pour un séjour inoubliable.',
    price: 25000,
    image: 'assets/img/Hhotel.jpg' // place une image dans src/assets
  };

}

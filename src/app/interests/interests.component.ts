import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent implements OnInit {

  interests = [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/cv-act1.appspot.com/o/001-art.png?alt=media&token=67af79ff-535a-4848-a052-60bc2f4d4c7e",
      hobby: "Artes"
    }
  ];

  ngOnInit(): void {
    const interes2 = { 
      icon: "https://firebasestorage.googleapis.com/v0/b/cv-act1.appspot.com/o/003-kpop-1.png?alt=media&token=685c3a8e-cd35-482c-b465-8c145634118c",
      hobby: "Cultura Popular" };
    const interes3 = { 
      icon: "https://firebasestorage.googleapis.com/v0/b/cv-act1.appspot.com/o/006-videogames.png?alt=media&token=67547017-bf85-4ad2-8d1f-3ae413b7be93",
      hobby: "Videojuegos" };
    const interes4 = { 
      icon: "https://firebasestorage.googleapis.com/v0/b/cv-act1.appspot.com/o/007-tv.png?alt=media&token=3d17552a-1c5a-4b60-ba4e-d787e14b39dc",
      hobby: "Tecnología" };
    const interes5 = { 
      icon: "https://firebasestorage.googleapis.com/v0/b/cv-act1.appspot.com/o/005-music.png?alt=media&token=5952679c-247e-4134-b51a-423938cf064a",
      hobby: "Música" };



    this.interests.push(interes2);
    this.interests.push(interes3);
    this.interests.push(interes4);
    this.interests.push(interes5);


    console.log(this.interests);
  }
}

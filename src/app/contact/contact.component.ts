import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Note the correct property name is 'styleUrls' not 'styleUrl'
})
export class ContactComponent implements OnInit {

  contacts = [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/cv-act1.appspot.com/o/gmail.png?alt=media&token=364ec5cd-8dfc-4ce1-8418-a02d2435ae69",
      method: "Email",
      value: "renomg.194@gmail.com"
    }
  ];

  ngOnInit(): void {
    const contact2 = {
      icon: "https://firebasestorage.googleapis.com/v0/b/cv-act1.appspot.com/o/phone.png?alt=media&token=47c01580-a51b-409e-9d76-2fb2bc25f6da",
      method: "Teléfono",
      value: "+52 555 555 5555"
    };
    const contact3 = {
      icon: "https://firebasestorage.googleapis.com/v0/b/cv-act1.appspot.com/o/github.png?alt=media&token=3788f8c2-8968-46cc-9409-114e33271c29",
      method: "GitHUb",
      value: "velocirenaptor"
    };

    this.contacts.push(contact2);
    this.contacts.push(contact3);

    console.log(this.contacts);
  }
}

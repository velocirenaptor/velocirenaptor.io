import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience = [
    {
      fecha: "Abril 2024-Julio 2024",
      ubicacion: "Orizaba, Ver.",
      ocupacion: "Front End",
      logros: [
        {
          descripcion: "Diseño de front-end en una tienda en línea tipo e-commerce."
        }
      ]
    }
  ];

  constructor() {
    console.log(this.workExperience);
  }
}

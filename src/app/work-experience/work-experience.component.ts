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
        },
        {
          descripcion: "Modelado de una página web funcional."
        },
        {
          descripcion: "Desarrollo de logística en un website e-commerce."
        }

      ]
    }
  ];

  ngOnInit(): void {
    const trabajo2 = {
      fecha: "Abril 2024-Junio 2024",
      ubicacion: "Orizaba, Ver.",
      ocupacion: "Subjefe",
      logros: [
        {
          descripcion: "Planeación de proyecto de una website."
        },
        {
          descripcion: "Estructuración de proceso de desarrollo y modelado del trabajo. "
        },
        {
          descripcion: "Administrador del proyecto, correcciones, moderación. "
        }
      ]
    };


  this.workExperience.push(trabajo2);

    console.log(this.workExperience);
}
}
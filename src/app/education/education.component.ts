import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'] 
})
export class EducationComponent implements OnInit {

  education = [
    {
      institucion: "Colegio México Primaria",
      generacion: "2010-2016",
      ubicacion: "Orizaba, Ver."
    }
  ];

  ngOnInit(): void {
    const escola2 = {
      institucion: "Colegio Champagnat",
      generacion: "2016-2019",
      ubicacion: "Orizaba, Ver."
    };

    const escola3 = {
      institucion: "Colegio Preparatorio de Orizaba",
      generacion: "2019-2022",
      ubicacion: "Orizaba, Ver."
    };

    this.education.push(escola2);
    this.education.push(escola3);

    console.log(this.education);
  }
}

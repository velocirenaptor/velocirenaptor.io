import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  remarks = [
    {
      strength: "Ágil comunicación"
    }
  ];

  ngOnInit(): void {
    const habilidad2 = { strength: "Quick Thinking" };
    const habilidad3 = { strength: "Resolución de problemas efectiva" };
    const habilidad4 = { strength: "Creatividad" };
    const habilidad5 = { strength: "Conocimientos de diseño" };
    const habilidad6 = { strength: "Trabajo en equipo" };
    const habilidad7 = { strength: "Carácter para liderar" };

    this.remarks.push(habilidad2);
    this.remarks.push(habilidad3);
    this.remarks.push(habilidad4);
    this.remarks.push(habilidad5);
    this.remarks.push(habilidad6);
    this.remarks.push(habilidad7);

    console.log(this.remarks);
  }
}

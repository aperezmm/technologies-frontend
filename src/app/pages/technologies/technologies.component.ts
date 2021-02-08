import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  public technologies: any;
  constructor(public _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.getTechnologies().subscribe((res) => {
      this.technologies = res;
      //console.log(this.technologies);
      /*
      if(this.technologies.error == false){
        alert("El resultado de la búsqueda ha sido éxitoso.")
      }*/
    });
  }

}

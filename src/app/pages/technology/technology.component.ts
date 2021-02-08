import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technology } from 'src/app/models/technology.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  public technology: Technology = {
    name: '',
    description: '',
    logo: '',
    _id: '',
    tags: [],
    createdAt: null,
    updatedAt: null
  };
  constructor(private _activatedRoute: ActivatedRoute, private _httpService: HttpService, private router: Router) { }

  ngOnInit(){
    this._activatedRoute.params.subscribe(params => {
      console.log("id del framework",params['id']);
      const id = params['id'];
      this._httpService.getTechnology(id).subscribe(data => {
        this.technology = data;
      }, error =>{
        const message = error.error.message;
        alert(message);
        this.router.navigate(['technologies']);
      });
    });
    
  }

}

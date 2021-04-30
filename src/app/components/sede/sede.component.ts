import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sede } from 'src/app/interfaces/sede';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  constructor(private _sedeService:SedeService) { }
  id:number;
  sede:Sede;
  sedes:Sede[];

  ngOnInit(): void {
    this.getSedes();
  }

  getSedes(){
    this._sedeService.getSedes().subscribe(Response => {
      this.sedes = Response;
      console.log(this.sedes);
    });
  };
  getSede(){
    this._sedeService.getSede(this.id).subscribe(Response => {
      this.sede = Response;
      console.log(this.sede);
    });
  }



}

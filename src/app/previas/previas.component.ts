import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";
import FusionCharts from 'fusioncharts/core';
import Maps from 'fusioncharts/maps';



import { CarreraService } from '../services/carrera.service';
import { Carrera } from '../interfaces/carrera';
import { Curso } from '../interfaces/curso';
import { CursoService } from '../services/curso.service';
import { Previa } from '../interfaces/previa';

import {Layout, Edge, Node, DagreNodesOnlyLayout} from '@swimlane/ngx-graph'
import { empty, Subject } from 'rxjs';
import * as shape from 'd3-shape';
// include map definition file from maps/es folder - import mapName from fusionmaps/maps/es/<MAP_ALIAS>

 
// add chart as dependency - FusionCharts.addDep(ChartType);

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
interface nodo {
  id: number,
  label: string
}
interface link {

  source: number,
  target: number,
  label: string
}
@Component({
  selector: 'app-previas',
  templateUrl: './previas.component.html',
  styleUrls: ['./previas.component.css']
})
export class PreviasComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Loafers', 'Moccasins', 'Sneakers', 'Loafers', 'Moccasins', 'Sneakers'];
  valorSelect;
  count = 0;
  public loading: boolean = false;
  public carreraSeleccionada:boolean = false;
  dataSource:Carrera[];
  cursos:Curso[];
  previas:Previa[];
  nodo: Node;
  link:Edge;
  nodos:Node[];
  links:Edge[];
  idcar;
  layouts: Layout;
  update$: Subject<boolean> = new Subject();
  constructor(private _carreraService : CarreraService,private _cursoService : CursoService) { 
    this.dataSource = [];
    this.layouts = new DagreNodesOnlyLayout();
    this.links = [];
    this.nodos = [];
    this.cursos = [];
    this.previas = [];
    this.nodo = {
      id: '',
      label: ''
    }
    this.link = {
      source: '',
      target: '',
      label: ''
    }

  }

  ngOnInit(): void {

    this.getCarreras();
    this.loading = true;
  }
  getCarreras(){
    this._carreraService.getCarreras().subscribe(Response=>{
      this.dataSource = Response;

    })
  }
  select(idcarrera){
    this.loading = false;

    let count = 0;
    this.nodos.splice(0,this.nodos.length);
    this.links.splice(0,this.links.length);
    this.previas.splice(0,this.previas.length);
    this.cursos.splice(0,this.cursos.length);
    this.links = [];
    this.nodos = [];
    this.previas =[];
    this.cursos = [];
    this.idcar = idcarrera;
    //Recorro las carreras
    this.dataSource.forEach((value, index) => {
      //carrera seleccionada por el usuario
      if(value.idcarrera == idcarrera){
          //Recorro los cursos
          value.cursos.forEach((value2, index2) => {
          //Armo el nodo
            this.nodo = {
              id:value2.idcurso.toString(),
              label:value2.nombre
            } 
            this.nodos.push(this.nodo);
            //Salgo a buscar las previas de ese curso
              this._cursoService.getPrevias({idcurso:value2.idcurso,idcarrera:idcarrera}).subscribe(Response=>{
                   this.previas = Response;  
                   //Recorro las previas del curso
                   this.previas.forEach((value3, index3) => {
                      count++;
                      //ARMO los linsk
                      this.link = {
                        id:this.makeid(),
                        target: value3.idcursoprevio.toString(),
                        source:value2.idcurso.toString(),
                        label: value3.tipoPrevia,
                      }

                      this.links.push(this.link);
                    });                  
              })
          });
        }
    });
    this.loading = true;
    console.log(this.links)
    this.carreraSeleccionada = true;
  }


  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


}

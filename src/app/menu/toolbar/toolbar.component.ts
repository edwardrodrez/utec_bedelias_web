import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public opened = false;
  public mode: string = "Estudiante";
  public color;
  constructor() { }

  ngOnInit(): void {

  }
  onValChange(value){
    if(value == "Admin"){
        this.mode ="Admin";
        this.color = "info";
    }else if(value == "Estudiante"){
        this.mode ="Estudiante";
        this.color = "primary";
    }else if(value == "Docente"){
      this.mode ="Docente";
      this.color = "red";
    }else if(value == "Secretario"){
      this.mode ="Secretario";
      this.color = "primary";
    }
    console.log(this.mode);
  }
}

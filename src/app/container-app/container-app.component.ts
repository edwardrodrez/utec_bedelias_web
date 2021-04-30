import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormLoginComponent } from '../login/form-login/form-login.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { CarreraService } from '../services/carrera.service';
import { Carrera } from '../interfaces/carrera';
import { Sede } from '../interfaces/sede';
import { InscripcionService } from '../services/inscripcion.service';
import { Periododeinscrpciones } from '../interfaces/periododeinscrpciones';

import {map, startWith} from 'rxjs/operators';
import { Persona } from '../interfaces/persona';
import { Direccion } from '../interfaces/direccion';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';
import { ValidarPostulacionComponent } from '../validar-postulacion/validar-postulacion.component';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

const presetFiles = [new File([], "file 1"), new File([], "file 2")];
const presetFile = new File([], "file 1");

@Component({
  selector: 'app-container-app',
  templateUrl: './container-app.component.html',
  styleUrls: ['./container-app.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ContainerAppComponent implements OnInit {
  public loading: boolean = false;
  fileControl: FormControl;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  valorSelect;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dataSource:Periododeinscrpciones[];
  dataCarrera:Carrera;
  date:Date = new Date();
  sedes:Sede[];
  carrareSeleccionada;
  dir:Direccion = {
    iddireccion:null,
    departamento: "",
    ciudad: "San Jose de mayo",
    calle: "Herrera y Rincón 184"
  }
  per:Persona = {
    ci:"34744508",
    nombre:"Carlos",
    apellido:"Perez",
    correo:"edward.rodriguez@utec.edu.uy",
    telefono:"09248489",
    fechaDeNacimiento:"",
    sexo:"",
    direccion:null,
    idusuario: null,
    idinscripcion:null
  }


  postularse= {
    idInscripcion: null,
    persona:null,
    ci: "",
    estado:"",
    escolaridad:"",
    carnetSalud:"",
    idperiododeincripciones:null
  }

  docCedula:string | ArrayBuffer=null;
  docCarne:string | ArrayBuffer=null;
  docEscolaridad:string | ArrayBuffer=null;
  url;
  ci;
  cs;
  escolaridad2;
  selected;
  durationInSeconds = 5;
  myControl = new FormControl();
  options: string[] = ['Artigas','Canelones', 'Colonia','Cerro Largo', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandu', 'Rio Negro', 'Rivera', 'Rocha', 'Salto','San Jose', 'Soriano', 'Tacuarembo', 'Treinta y Tres'];
  filteredOptions: Observable<string[]>;
  valor:number = 0;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPositionError: MatSnackBarHorizontalPosition = 'center';
  verticalPositionError: MatSnackBarVerticalPosition = 'bottom';

  ar1:boolean;
  ar2:boolean;
  ar3:boolean;
  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private _formBuilder: FormBuilder,private _carreraService : CarreraService,private _inscripcionService : InscripcionService) {

   }

   select(data){
     console.log(data);
     this.valor = data;
   }

   getPeriodosPostularse(){
    this._inscripcionService.getPeriodosInscripcionPostulantes().subscribe(Response=>{
      this.dataSource = Response;

    })
  } 

  nomFormControl = new FormControl('', [
    Validators.required,
  ]);
  ciFormControl = new FormControl('', [
    Validators.required,
  ]);
  apeFormControl = new FormControl('', [
    Validators.required,
  ]);
  emeFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  telFormControl = new FormControl('', [
    Validators.required,
  ]);
  fecha1FormControl = new FormControl('', [
    Validators.required,
  ]);
  depFormControl = new FormControl('', [
    Validators.required,
  ]);
  ciuFormControl = new FormControl('', [
    Validators.required,
  ]);
  dirFormControl = new FormControl('', [
    Validators.required,
  ]);
  enviarSolicitud(){
    if(this.selected == 'option1'){
      this.per.sexo = "Hombre";
    }else{
      this.per.sexo = "Mujer";
    }

    this.per.direccion = this.dir;
    this.per.fechaDeNacimiento = formatDate(this.date, 'yyyy-MM-dd', 'en-US');
    console.log(this.valor);
    this.postularse.idperiododeincripciones = this.valor;
    this.postularse.persona = this.per;
    this.postularse.ci = this.docCedula as string;
    this.postularse.carnetSalud = this.docCarne as string;
    this.postularse.escolaridad = this.docEscolaridad as string;
    if(this.ar1 && this.ar2 && this.ar3){
      if(this.nomFormControl.valid&&this.apeFormControl.valid&&this.ciFormControl.valid&&this.dirFormControl.valid&&this.ciuFormControl.valid&&this.depFormControl.valid&&this.emeFormControl.valid&&this.fecha1FormControl.valid){
        this._inscripcionService.addInscripcion(this.postularse).subscribe(Response=>{
          console.log(Response);
          this.dialog.open(ValidarPostulacionComponent);
  
        })

      }
      this.irInicio();
    }
      else{
        if(!this.ar1){
          this.openNotificacionError("El archivo de la ci no es un pdf");
        }
        if(!this.ar2){
          this.openNotificacionError("El archivo del carnet de salud no es un pdf");
        }
        if(!this.ar3){
          this.openNotificacionError("El archivo de la escolaridad  no es un pdf");
        }
      }
  }
   openNotificacionUsuario(mensaje:string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 3000,
      panelClass: ['notificar-usuario'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  openNotificacionError(mensaje:string) {
    this._snackBar.open(mensaje, 'ERROR', {
      duration: 5000,
      panelClass: ['notificar-error'],
      horizontalPosition: this.horizontalPositionError,
      verticalPosition: this.verticalPositionError,
    });
  }

  ngOnInit() : void{
    this.firstFormGroup = this._formBuilder.group({
    
    });
    this.secondFormGroup = this._formBuilder.group({

    });
    setTimeout(()=> {
      this.loading = true;
    }, 1000);
    this.selected = "option1";
    this.getPeriodosPostularse();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  //CEDULA DE IDENTIDAD DOCUMENTO
  handleFileInput(files: FileList,event:any) {
    let me = this;
    let file = files[0];
    let reader = new FileReader();
    this.ci = files.item(0).name;
    reader.readAsDataURL(file);
    reader.onload = function () {
    me.docCedula=reader.result;
    console.log(reader.result);

    };
    if(this.ci.split('.').pop() != 'pdf'){
      this.ar1 = false;
    } else{
      this.ar1 = true;
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
//CARNE DE SALUD DOCUMENTO
 handleFileInput2(files: FileList,event:any) {
  let me = this;
  let file = files[0];
  let reader = new FileReader();
  this.cs = files.item(0).name;
  reader.readAsDataURL(file);
  reader.onload = function () {
  me.docCarne=reader.result;
  console.log(reader.result);
  };
  if(this.cs.split('.').pop() != 'pdf'){
    this.ar2 = false;
  }
  else{
    this.ar2 = true;
  }
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
//ESCOLARIDAD DOCUMENTO
handleFileInput3(files: FileList,event:any) {
  let me = this;
  let file = files[0];
  let reader = new FileReader();
  this.escolaridad2 = files.item(0).name;
  reader.readAsDataURL(file);
  reader.onload = function () {
  me.docEscolaridad=reader.result;
  console.log(reader.result);
  };
  if(this.escolaridad2.split('.').pop() != 'pdf'){
    this.ar3 = false;
  } else{
    this.ar3 = true;
  }
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
  openDialogLogin(){
    this.dialog.open(FormLoginComponent);
  }



  irApostularse() {
    document.getElementById("cont").scrollIntoView({behavior:"smooth"});
  }


  irInicio() {
    
    var element = document.getElementById('ini');
    var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

  }



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: true,
  pullDrag: true,
  dots: true,
  navSpeed: 700,
  navText: ["<div style='fill: darkorange;color: whitesmoke;' >Anterior</div>","<div style='fill: darkorange;color: whitesmoke;'>Siguiente</div>"],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 2
    },
    1100: {
      items: 2
    },
    1400: {
      items: 3
    },
    1600: {
      items: 4
    }
  },
  nav: true,

}
}

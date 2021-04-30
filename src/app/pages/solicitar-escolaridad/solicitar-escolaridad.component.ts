import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Columns, Img, Item, Ol, PdfMakeWrapper, Stack } from 'pdfmake-wrapper';
import { Txt } from 'pdfmake-wrapper';
import { Table } from 'pdfmake-wrapper';
import { Cell } from 'pdfmake-wrapper';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Certificado } from 'src/app/interfaces/certificado';
import { formatDate } from '@angular/common';
import { Carrera } from 'src/app/interfaces/carrera';
import { Curso } from 'src/app/interfaces/curso';
import { Sede } from 'src/app/interfaces/sede';
import { CarreraService } from 'src/app/services/carrera.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import {Md5} from 'ts-md5/dist/md5';
import { delay } from 'rxjs/operators';
export interface PeriodicElement {
  idusuario?: number;
  idcarrera?: number;
}

export interface dtescolaridad {
  nombre?:string,
  apellido?:string,
  cedula?:number,
  añoDeIngreso?:Date,
  carrera?:string,
  Promedio?:number,
  creditosTotales?:number,
  creditosDeCarrera?:number,
  areas?:Areadeestudio[]
}
export interface Areadeestudio {
  nombre:string,
  creditosMinimos:number,
  creditosTiene:number,
  materias:Materia[]
}
export interface Materia {
  materia:string,
  tipo:string,
  fecha:Date,
  nota:number,
  creditos:number
}
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
@Component({
  selector: 'app-solicitar-escolaridad',
  templateUrl: './solicitar-escolaridad.component.html',
  styleUrls: ['./solicitar-escolaridad.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class SolicitarEscolaridadComponent implements OnInit {
  public loading: boolean = false;
  carrerasUs: Carrera[] = [];
  cursos:Curso[];
  sedes:Sede[];
  actual:Carrera;
  us:PeriodicElement = {};
  dtesc:dtescolaridad= {};
  today: Date = new Date();

  escgen = {
    codigo: "",
    fechaExpiracion: "",
    pdf: ""
  }
  pdfMake: any;
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  constructor(private _estudianteService : EstudianteService, private _carreraService : CarreraService) {}

  ngOnInit(): void {
    this.color="darkorange";

    this.getCarrerasUs();
  }

  getCarrerasUs(){
    this._estudianteService.getCarrerasUs(parseInt(localStorage.getItem('idusuario'))).subscribe(Response=>{
      this.carrerasUs = Response;

      this.loading = true;
    })
  }

  getEscolaridad(id){
    this.us.idusuario = parseInt(localStorage.getItem('idusuario'));
    this.us.idcarrera = id;
    this._estudianteService.getEscolaridadInfo(this.us).subscribe(Response=>{
      this.dtesc = Response;
      this.generarEscolaridad();
      });

  }

  async generarEscolaridad(){

    const pdf = new PdfMakeWrapper();
    let dia = new Date().getDate();
    let mes= new Date().getMonth() + 1;
    let anio = new Date().getFullYear();
    let hora = new Date().getHours();
    let min = new Date().getMinutes();
    let hratotal = hora + ' : ' +'0'+ min;
    let date1 = dia +'/'+ mes +'/'+ anio;
    
    //GENERANDO HASH 
    const md5 = new Md5();

      pdf.pageMargins([ 45, 25, 45, 25 ]);
      pdf.add(
        await new Img('../assets/img/logo-utec.png').height(40).width(40).build()

      );
      pdf.add(
        pdf.ln(1)
      );
      pdf.add(

        new Columns([ 'UTEC BEDELIAS', date1+ ' '+ ' '+ new Date().toLocaleTimeString() ]).alignment("center").bold().fontSize(13).end

      );
      
      pdf.add(
        pdf.ln(2)
      );
      pdf.add(
        new Stack([ 'Certificado de Escolaridad']).alignment("center").italics().end 
      );
      pdf.add(
        pdf.ln(1)
      );
      pdf.add(
        new Stack([ this.dtesc.cedula + ' ' + this.dtesc.nombre + ' ' + this.dtesc.apellido]).alignment("center").bold().end 
      );
      pdf.add(
        pdf.ln(3)
      );

      pdf.add(

        new Table(
          [
            [ 'Carrera', 'Fecha de Ingreso'],
            [this.dtesc.carrera + ' '+'',''+ ' ' + this.dtesc.añoDeIngreso + ' '],
          ],

      ).bold().widths("*").end
      );

      pdf.add(
        pdf.ln(2)
      );

     
      pdf.add(
        new Stack([ 'Areas de Estudio']).alignment("center").bold().fontSize(12).end 
      );
      pdf.add(
        pdf.ln(1)
      );
      //Listo las areas de  la escolaridad
   
      this.dtesc.areas.forEach(function(entry){ 
              pdf.add(

                new Table(
                  [
                    [ 'Nombre del Area', 'Creditos Minimos', 'Creditos Obtenidos'],
                    [ entry.nombre, entry.creditosMinimos, entry.creditosTiene],
                  ],

              ).widths("*").end
              );
              pdf.add(
                pdf.ln(1)
              );
              pdf.add(
                new Stack(['Materias de ' + ' ' +entry.nombre  ]).bold().alignment("left").end,
              );

              pdf.add(
                pdf.ln(1)
              );
            entry.materias.forEach(function(childrenEntry) { // was missing a )
              pdf.add(
            
                new Table(
                  [
                    [ 'Nombre de Materia', 'Tipo', 'Fecha', 'Creditos'],
                    [ childrenEntry.materia,childrenEntry.tipo, childrenEntry.fecha,childrenEntry.creditos],
                  ],
      
              ).widths("*").end
              );
              pdf.add(
                pdf.ln(1)
              );
              
            });
        });

    

        pdf.add(
          pdf.ln(4)
        );
        // RESULTADOS DEL ALUMNO
        pdf.add(

          new Table(
            [
              [ 'Promedio', this.dtesc.Promedio],
              [ 'Creditos Totales',  this.dtesc.creditosTotales ],
              [ 'Creditos de la Carrera',this.dtesc.creditosDeCarrera],
            ],
  
        ).bold().widths("*").end
        );



      pdf.add(
        pdf.ln(10)
      );
      // Codigo de verificacion
      let r = Math.random().toString(36).substring(7);
      let cod = md5.appendStr(r).end();
      //FECHA DE EXPIRACION
      this.today = new Date();
      this.today = new Date(new Date(this.today).setMonth(this.today.getMonth()+1));
      this.escgen.fechaExpiracion = formatDate(this.today, 'yyyy-MM-dd', 'en-US');

      pdf.add(
        new Stack([ 'Código de verificación : '+ ' '+ cod +' '+' '+ ' ' +'Válido hasta : '+' '+this.escgen.fechaExpiracion]).alignment("center").italics().end 
      );

      pdf.add(
        pdf.ln(1)
      );
      pdf.add(
        new Item(
          new Txt('Validar en : http://localhost:4200/ValidarEscolaridad').alignment("center").bold().end
      ).link("http://localhost:4200/ValidarEscolaridad").decoration("underline").end,
      );
      pdf.create().open();


      this.escgen.codigo = cod.toString();


      //CONVERTIR A BASE 64
  
      pdf.create().getBlob((data) => {   
        console.log(data)  
        var reader = new FileReader();
        reader.onloadend = () => {
          var base64data = reader.result;                
              console.log(base64data);
              
              this.escgen.pdf = reader.result as string
              
              this.addEscolaridad(reader.result as string);
        }
        
        reader.readAsDataURL(data); 
      });

  }

  addEscolaridad(pdf){
    this.escgen.pdf = pdf;
    console.log(this.escgen);
    this._estudianteService.addEscolaridad(this.escgen).subscribe(Response=>{
    
      });
  
  }
}

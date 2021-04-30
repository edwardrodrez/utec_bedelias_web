import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios.service';

export interface aux {
  pass: string;
}

@Component({
  selector: 'app-cambiar-pass',
  templateUrl: './cambiar-pass.component.html',
  styleUrls: ['./cambiar-pass.component.css']
})
export class CambiarPassComponent implements OnInit {
  aux:aux;
  constructor(private usS:UsuariosService) { }

  ngOnInit(): void {
    this.aux ={
      pass: ""
    }
  }
  passFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  cambiarPass(){
    this.usS.cambiarPass(this.aux).subscribe(Response => {
    });
  };
}

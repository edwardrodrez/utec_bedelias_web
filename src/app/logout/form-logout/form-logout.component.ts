import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, Router } from '@angular/router'
@Component({
  selector: 'app-form-logout',
  templateUrl: './form-logout.component.html',
  styleUrls: ['./form-logout.component.css']
})
export class FormLogoutComponent implements OnInit {

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.removeItem("roles")
    localStorage.removeItem("token")
    localStorage.removeItem("idusuario")
    localStorage.removeItem("persona")
    localStorage.removeItem("menu")
    this.dialog.closeAll();
    this.router.navigate(['/']);
  }
}

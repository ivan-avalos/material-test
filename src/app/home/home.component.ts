import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  showSnackbar() {
    let snackBarRef = this.snackBar.open("Nop", 'OK')
    snackBarRef.onAction().subscribe(() => {
      snackBarRef.dismiss()
    })
  }

}

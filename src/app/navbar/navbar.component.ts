import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Material';

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Thanks') {
        let snackbarRef = this.snackBar.open("You're welcome", "CLOSE")
        snackbarRef.onAction().subscribe(() => {
          snackbarRef.dismiss()
        })
      }
      if(result === 'Cancel') {
        let snackbarRef = this.snackBar.open("You're ungrateful", "THANKS")
        snackbarRef.onAction().subscribe(() => {
          snackbarRef.dismiss()
        })
      }
    })
  }

}

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-close',
  templateUrl: './system-close.component.html',
  styleUrls: ['./system-close.component.css']
  
})
export class SystemCloseComponent implements OnInit {

  constructor(private router: Router, private dialogClose: MatDialog) { }

  ngOnInit(): void {
  }

  navigateToLogin(): void {
    this.router.navigate(['/login'])
    this.dialogClose.closeAll()
  }

  cancel(): void {
    this.dialogClose.closeAll()
  }

}

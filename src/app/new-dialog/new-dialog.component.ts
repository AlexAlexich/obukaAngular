import { DialogFormat } from './dialogFormat';
import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.css'],
})
export class NewDialogComponent implements OnInit {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    public dialogRef: MatDialogRef<NewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogFormat
  ) {}

  ngOnInit(): void {}
  onYes() {
    this.clicked.emit(true);
    this.dialogRef.close();
  }
  onNo() {
    this.clicked.emit(false);
    this.dialogRef.close();
  }
}

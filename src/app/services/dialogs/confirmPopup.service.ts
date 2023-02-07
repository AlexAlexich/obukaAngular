import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormat } from 'src/app/new-dialog/dialogFormat';
import { NewDialogComponent } from 'src/app/new-dialog/new-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmPopupService {

  constructor(private dialog: MatDialog) { }


  openPopup(title: string = "Confirm", text: string = "Are you sure you want to proceed?"): Observable<boolean> {
    let popupModel = new DialogFormat();
    popupModel.title = title;
    popupModel.text = text;
    const dialogRef = this.dialog.open(NewDialogComponent, {
      data: popupModel
    });

    return dialogRef.componentInstance.clicked.asObservable();
  }

}

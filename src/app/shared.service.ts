import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";

@Injectable()
export class SharedService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  rowData: any[];
  url = "https://604b34faee7cb900176a18ef.mockapi.io/api/v1/InventoryItems";

  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  addInventoryData(post) {
    console.log(JSON.stringify(post));
    this.http
      .post(this.url, JSON.stringify(post))
      .toPromise()
      .then(data => {
        // console.log(data);
      });
    this.getInventoryData();
  }
  getInventoryData() {
    this.http.get(this.url).subscribe(data => {
      // console.log(data);
      this.rowData = data as any[];
    });
    this.snackBar.open("getInventoryData Successfull", "Close", {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: "color-snackbar"
    });
  }
}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AddItemsComponent } from "./add-items/add-items.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { AgGridModule } from "ag-grid-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedService } from './shared.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,MatSnackBarModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    AddItemsComponent,
    InventoryComponent
  ],
  bootstrap: [AppComponent],
  providers: [SharedService]
})
export class AppModule {}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SharedService } from "../shared.service";
@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.css"]
})
export class InventoryComponent implements OnInit {
  columnDefs = [
    { field: "id", sortable: true, filter: true, width: "100" },
    { field: "name", sortable: true, filter: true },
    { field: "description", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true, width: "130" },
    {
      field: "image",
      sortable: true,
      filter: true,
      width: "130",
      cellRenderer: function(params) {
        console.log(params);
        return (
          '<img src="https://source.unsplash.com/random/200x200?sig=' +
          params.rowIndex +
          '" alt="" height="50" width="50">'
        );
        // since value from mockAPI not failing to fetch added random image url to show how image view works in ag-grid
      }
    }
  ];

  constructor(public sharedservice: SharedService) {}

  ngOnInit() {
    this.sharedservice.getInventoryData();
  }
}

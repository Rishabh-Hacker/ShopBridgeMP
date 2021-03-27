import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { SharedService } from "../../shared.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";

@Component({
  selector: "app-add-items",
  templateUrl: "./add-items.component.html",
  styleUrls: ["./add-items.component.css"]
})
export class AddItemsComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = "This field is required";
  post: any = "";
  @ViewChild("labelValue")
//variables used while form validation and fetching value using formsmodule
  labelValue: ElementRef;
  imageFileToUpload: File = null;
  //positon of mat-snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor(
    private formBuilder: FormBuilder,
    private sharedservice: SharedService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    //create, sets and validates forms group
    this.createForm();
    this.setChangeValidate();
  }
  //create form
  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, [Validators.required, Validators.minLength(3)]],
      image: new FormControl("", Validators.required),
      validate: ""
    });
  }

  //validates few fields with respect to form
  setChangeValidate() {
    this.formGroup.get("validate").valueChanges.subscribe(validate => {
      this.formGroup.get("name").setValidators(Validators.required);

      this.formGroup.get("name").updateValueAndValidity();
      this.formGroup.get("price").setValidators(Validators.required);

      this.formGroup.get("price").updateValueAndValidity();
    });
  }

//to fetch name field value
  get name() {
    return this.formGroup.get("name") as FormControl;
  }
//to fetch name field value
  get price() {
    return this.formGroup.get("price") as FormControl;
  }

//on upload file change event
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const Image = event.target.files[0];
      this.imageFileToUpload = Image;
      this.labelValue.nativeElement.innerText = Image.name;
    }
  }
//submission of form to MockAPI using shared service and mat-snackbar for toastr messages
  onSubmit(post) {
    delete post.validate; //removing validate prop which is for validating field
    this.post = post;
    this.sharedservice.addInventoryData(this.post);
    this.formGroup.reset();

    this.labelValue.nativeElement.innerText = null;
    Object.keys(this.formGroup.controls).forEach(key => {
      this.formGroup.get(key).setErrors(null);
    });

    this.snackBar.open("post Successfull", "Close", {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: "color-snackbar"
    });
  }
}

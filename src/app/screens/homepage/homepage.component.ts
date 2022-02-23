import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { LocationService } from "../../services/location.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  public currentLocations: number[];
  public locationForm: FormGroup;

  constructor(private readonly _locationService: LocationService) {}

  ngOnInit(): void {
    this.locationForm = new FormGroup({
      zipCode: new FormControl(null, Validators.required),
    });

    this.currentLocations = this._locationService.getList();
    setTimeout(() => {
      this.currentLocations = this._locationService.addLocation(95742);
    }, 3000);
  }

  public onLocationRemoved(zipCode: number): void {
    const index = this.currentLocations.indexOf(zipCode);
    if (index > -1) {
      this.currentLocations.splice(index, 1);
    }
  }

  public onSubmit() {
    if (this.locationForm.valid) {
      const zipCode = this.locationForm.controls["zipCode"].value;
      this.currentLocations = this._locationService.addLocation(zipCode);
    }
  }
}

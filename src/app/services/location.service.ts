import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  private readonly locationKey: string = "location";
  constructor() {}

  public getList(): number[] {
    return JSON.parse(localStorage.getItem(this.locationKey)) || [];
  }

  public addLocation(zipCode: number): number[] {
    let data: number[] = this.getList();
    if (data.indexOf(zipCode) === -1) {
      data.push(zipCode);
      localStorage.setItem(this.locationKey, JSON.stringify(data));
    }
    return data;
  }

  public removeLocation(zipCode: number): number[] {
    let data: number[] = this.getList();
    const zipCodeIndex = data.indexOf(zipCode);
    if (zipCodeIndex > -1) {
      data.splice(zipCodeIndex, 1);
      localStorage.setItem(this.locationKey, JSON.stringify(data));
    }

    return data;
  }
}

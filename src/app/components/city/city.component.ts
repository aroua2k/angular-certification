import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

import { Observable } from "rxjs";

import { Weather } from "../../models";
import { LocationService } from "../../services/location.service";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
})
export class CityComponent implements OnInit {
  @Input()
  public zipCode: number;

  @Output()
  public locationRemoved: EventEmitter<number> = new EventEmitter();

  constructor(
    private readonly _weatherService: WeatherService,
    private readonly _locationService: LocationService
  ) {}

  public weather$: Observable<Weather>;

  ngOnInit(): void {
    this.weather$ = this._weatherService.getCurrentWeather(this.zipCode);
  }

  public removeLocation(zipCode: number): void {
    if (zipCode) {
      this._locationService.removeLocation(zipCode);
      this.locationRemoved.emit(zipCode);
    }
  }
}

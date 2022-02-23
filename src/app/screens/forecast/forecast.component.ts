import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, Observable, of, pluck, switchMap } from "rxjs";
import { Forecast } from "../../models";

import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"],
})
export class ForecastComponent implements OnInit {
  public forecast$: Observable<Forecast>;

  constructor(
    route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _weatherService: WeatherService
  ) {
    this.forecast$ = route.params.pipe(
      pluck("zipCode"),
      switchMap((zipCode: number) => {
        return this._weatherService.getForecast(zipCode).pipe(
          catchError((_err: any, _caught: Observable<Forecast>) => {
            alert("Unknown ZipCode");
            this.goToHomePage();
            return of(null);
          })
        );
      })
    );
  }

  ngOnInit(): void {}

  public goToHomePage(): void {
    this._router.navigate([""]);
  }
}

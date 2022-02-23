import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Forecast, Weather } from "../models";
import { Observable } from "rxjs";

const BASE_URL = "http://api.openweathermap.org/data/2.5";

const API_KEY = "5a4b2d457ecbef9eb2a71e480b947604"; //08f950736520be8d5b87aa0525c37f45

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(protected readonly _http: HttpClient) {}

  public getCurrentWeather(zipCode: number): Observable<Weather> {
    let params: HttpParams = new HttpParams().set("zip", zipCode);
    params = params.append("units", "metric").append("appid", API_KEY);

    return this._http.get<Weather>(`${BASE_URL}/weather`, { params });
  }

  public getForecast(zipCode: number): Observable<Forecast> {
    let params: HttpParams = new HttpParams().set("zip", zipCode);

    params = params.append("units", "metric").append("appid", API_KEY);

    return this._http.get<Forecast>(`${BASE_URL}/forecast/daily`, { params });
  }
}

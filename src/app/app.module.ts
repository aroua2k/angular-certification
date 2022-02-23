import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ForecastComponent } from "./screens/forecast/forecast.component";
import { HomepageComponent } from "./screens/homepage/homepage.component";
import { AppRoutingModule } from "./app-routing.module";
import { CityComponent } from "./components/city/city.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ForecastComponent,
    HomepageComponent,
    CityComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { PreloadAllModules, Route, RouterModule } from "@angular/router";

import { ForecastComponent } from "./screens/forecast/forecast.component";
import { HomepageComponent } from "./screens/homepage/homepage.component";

const routes: Route[] = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "forecast/:zipCode",
    component: ForecastComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

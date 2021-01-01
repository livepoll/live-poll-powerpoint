/*
 * Copyright © Live-Poll 2020-2021. All rights reserved
 */
import "zone.js"; // Required for Angular
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import AppModule from "./app/app.module";
/* global console, document, Office */

Office.initialize = () => {
  document.getElementById("sideload-msg").style.display = "none";

  // Bootstrap the app
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(error => console.error(error));
};

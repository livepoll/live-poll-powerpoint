import { Component } from "@angular/core";

// images references in the manifest
import "../../../assets/icon-16.png";
import "../../../assets/icon-32.png";
import "../../../assets/icon-80.png";

const template = require("./app.component.html");
/* global console, Office, require */

@Component({
  selector: "app-home",
  template
})
export default class AppComponent {

  loading = false;

  /**
   * Takes the entered url, and inserts an element with a live view of the poll results to the current slide
   */
  async insertPoll() {
    this.loading = true;
    // Add element to slide
    Office.context.document.setSelectedDataAsync(
      "Hello World!",
      {
        coercionType: Office.CoercionType.Text
      },
      result => {
        if (result.status === Office.AsyncResultStatus.Failed) console.error(result.error.message);
      }
    );
  }
}

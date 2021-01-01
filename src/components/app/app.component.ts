/*
 * Copyright © Live-Poll 2020-2021. All rights reserved
 */

import {Component, OnInit} from "@angular/core";

// images references in the manifest
import "../../../assets/icon-16.png";
import "../../../assets/icon-32.png";
import "../../../assets/icon-80.png";
import {Poll} from "../../model/poll";

const template = require("./app.component.html");
/* global console, Office, require */

@Component({
  selector: "app-home",
  template
})
export default class AppComponent implements OnInit {

  loading = false;
  poll: Poll
  results = null;

  ngOnInit() {
    this.setupResultObserver();
  }

  /**
   * Takes the entered url, and inserts an element with a live view of the poll results to the current slide
   */
  async insertPoll() {
    this.loading = true;

    // Add element to slide
    /*Office.context.document.setSelectedDataAsync(image, {
      coercionType: Office.CoercionType.Image
    },
    function (asyncResult) {
      if (asyncResult.status === Office.AsyncResultStatus.Failed) {
        showNotification("Error", asyncResult.error.message);
      }
    });*/



    /*Office.context.document.setSelectedDataAsync(
      "Hello World!",
      {
        coercionType: Office.CoercionType.Text
      },
      result => {
        if (result.status === Office.AsyncResultStatus.Failed) console.error(result.error.message);
      }
    );*/
  }

  /**
   * Establish socket connection to the server to ensure data exchange in realtime
   */
  setupResultObserver(): void {
    // TODO: Remove this mocked data later on
    this.results = [];
    this.poll.pollItems.forEach(pollItem => {
      this.results.push({
        id: pollItem.id,
        data: [
          {
            name: 'Noodles',
            value: 4
          },
          {
            name: 'Pizza',
            value: 10
          },
          {
            name: 'Burger',
            value: 11
          },
          {
            name: 'Rice',
            value: 4
          },
          {
            name: 'Vegetables',
            value: 5
          }
        ]
      });
    });
  }
}

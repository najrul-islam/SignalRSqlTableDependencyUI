import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalrHubServiceService {
  hubUrl: string = environment.hubUrl;
  public connectionId: string;
  public hubConnection: signalR.HubConnection;

  constructor() { }

  createHubConnection(): Promise<void> {
    //const accessToken = localStorage.getItem("accessToken");
    this.hubConnection = new signalR.HubConnectionBuilder()
      // .withUrl(this.hubUrl, { accessTokenFactory: () => accessToken })
      .withUrl(this.hubUrl)
      .withAutomaticReconnect()
      .build();

    return this.hubConnection
      .start()
      .then(() => {
        this.connectionId = this.hubConnection.connectionId;
        this.registerEventsListner();
      })
      .catch((err) => console.log(err));
  }

  public async stopHubConnection(): Promise<void> {
    this.hubConnection
      ?.stop()
      ?.then(() => {
        console.log("SignalR Connection Closed.");
      })
      ?.catch((err) => {
        console.log("Error while closing the SignalR connection.");
      });
  }

  private registerEventsListner(): void {
    this.updateProduct();
  }

  updateProduct = (): void => {
    this.hubConnection.on("onProductUpdate", (data) => {
      //
      console.log(data);//result = Product updated.
      alert(data);
    });
  };
}

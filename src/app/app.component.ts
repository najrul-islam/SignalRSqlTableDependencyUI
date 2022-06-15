import { Component } from '@angular/core';
import { SignalrHubServiceService } from 'src/services/signalr-hub-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SignalRSqlTableDependencyUI';

constructor(private signalrHubServiceService: SignalrHubServiceService)
{}
ngOnInit() {
    this.startSignalRConnection();
  }
  private startSignalRConnection(): void {
    this.signalrHubServiceService.createHubConnection().then(() => {
    });
  }
}

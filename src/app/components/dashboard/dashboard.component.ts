import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/url.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  previousUrl: Observable<string> = this.urlService.previousUrl$;

  constructor(private urlService: UrlService) {}

  ngOnInit() {
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      console.log('previousUrl', previousUrl);
    });
  }
}

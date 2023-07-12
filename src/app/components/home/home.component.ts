import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  previousUrl: Observable<string> = this.urlService.previousUrl$;

  constructor(private urlService: UrlService) {}

  ngOnInit() {
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      console.log('previousUrl', previousUrl);
    });
  }
}

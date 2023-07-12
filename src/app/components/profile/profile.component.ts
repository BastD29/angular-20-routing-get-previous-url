import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/url.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  previousUrl: Observable<string> = this.urlService.previousUrl$;

  constructor(private urlService: UrlService) {}

  ngOnInit() {
    this.urlService.previousUrl$.subscribe((previousUrl: string) => {
      console.log('previousUrl', previousUrl);
    });
  }
}

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UrlService } from './url.service';
import { filter } from 'rxjs';
// import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-get-previous.';
  previousUrl: string = '';
  currentUrl: string = '';

  constructor(private router: Router, private urlService: UrlService) {}

  ngOnInit() {
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: NavigationEnd) => {
    //     this.previousUrl = this.currentUrl;
    //     this.currentUrl = event.url;
    //     this.urlService.setPreviousUrl(this.previousUrl);
    //   });

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.urlAfterRedirects;
        this.urlService.setPreviousUrl(this.previousUrl);
      });
  }
}

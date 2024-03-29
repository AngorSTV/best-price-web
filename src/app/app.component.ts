import {Component} from '@angular/core';
import {HttpService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'best-price';
  query: string = "";

  constructor(private httpService: HttpService) {
  }

  submit() {
    this.httpService.getProducts(this.query).subscribe((data: any) => {

    });
  }
}

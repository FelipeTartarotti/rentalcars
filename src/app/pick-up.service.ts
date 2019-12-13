import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PickUpService {

  private url = "https://www.rentalcars.com/";

  constructor(private http: HttpClient) {}

  get_location(location){
    return this.http.get(this.url.concat(`LocationAutocomplete.do?term=${location}&preflang=en&domain=rc.com&cor=br`));
  }

}

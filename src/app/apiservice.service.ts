import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private apiUrl = 'http://localhost/angular_api/api/hello'; // API URL

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<string> {

    return this.http.get<string>(this.apiUrl, { responseType: 'text' as 'json' }); // API'den veri al

  }

  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private apiUrl = '/api/hello'; // Proxy ile yönlendirilecek API URL

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<string> {
    return this.http.get<string>(this.apiUrl, { responseType: 'text' as 'json' });
  }

  
}

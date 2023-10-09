import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Weather } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getTemp(name: string) : Observable<Weather>{
   return this.http.get<Weather>(`${environment.apiUrl}/city/${name}`, {
      headers: new HttpHeaders()
      .set("X-RapidAPI-Host", environment.XRapidAPIHost)
      .set("X-RapidAPI-Key", environment.XRapidAPIKey),
    })
  }
}

import { TemperatureData } from './../models/temperature-data.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TemperatureDataService {

  private basePath = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

   public getTemperatureData(): Observable<TemperatureData[]>{
      return this.httpClient.get<any>(`${this.basePath}/cityInfoes?projection=projectDateAndTemperature`)
      .pipe(
        map(res => res._embedded.cityInfoes.map((d: Partial<TemperatureData>) => new TemperatureData(d)))
      )
   }
}

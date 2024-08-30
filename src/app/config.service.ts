
// Load environment variables from .env file
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'; // Adjust the path if needed
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ConfigService {

  constructor(private http: HttpClient) { }
  get apiUrl(): string {
    return environment.api_url;
  }

  getListAffaires(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list_affaires`);
  }

  filterOptions(value: string, options: any[]): any[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
}

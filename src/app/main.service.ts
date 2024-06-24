import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  apiUrl = environment.joinusLogicAppUrl;

  constructor(private http: HttpClient) { }

  uploadFile(file: string, email: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.apiUrl, {
      FileContent: file,
      Email: email
    },{headers});
  }

}

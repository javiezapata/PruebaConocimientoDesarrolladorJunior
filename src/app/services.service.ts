import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'
  private apiUrlpost = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) {  }

  getApi():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  getId(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  envioForm(data: any){
    return this.http.post(`${this.apiUrlpost}/posts`,
      data
    )
  }

    
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host: string = "http://osuvnfc.xyz/api";

  constructor(private http: HttpClient) { }

  sendPost(url: string, data: any) {
    this.http.post(this.host + url, data).subscribe((res: any) => {
    });

  }

  sendGet(url: string) {
    return this.http.get(this.host + url).toPromise();
  }
}

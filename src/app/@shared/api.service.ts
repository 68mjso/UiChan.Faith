import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host: string = "http://osuvnfc.xyz/api";

  constructor(private http: HttpClient) { }

  sendPost(url: string, data: any) {
    this.http.post(this.host + url, data).subscribe((res: any) => {
      console.log(res);
    });

  }

  sendGet(url: string) {
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
    });
  }
}

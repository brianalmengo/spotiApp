import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor( private http: HttpClient) {
    console.log("Servicio Corriendo");
   }

  getToken() {
    console.log("En el servicio");

    const HEADERS = new HttpHeaders({      
      'Content-Type': 'application/x-www-form-urlencoded',
      'cache-control' : 'no-cache'
    });

    let body = new URLSearchParams();
        body.append('grant_type','client_credentials');
        body.append('client_id','d6b55734aa3f4b49af89ae8023b6c69e');
        body.append('client_secret','4659ca881ead4eed81c45197f071db34');

    this.http.post('https://accounts.spotify.com/api/token', 'application/x-www-form-urlencoded'
            , { headers: HEADERS })
        .subscribe( data => {
          console.log(data);
        });
  }
}


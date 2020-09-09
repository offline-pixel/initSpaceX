import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class SpacexlpService {
  
  HttpEventResponse(event) {
    // console.log(event);
    switch ( event.type ) {
      case HttpEventType.Sent:
      break;
      case HttpEventType.ResponseHeader:
      break;
      case HttpEventType.DownloadProgress:
      const loaded = Math.round( event.loaded / 1024 );
      // const loaded = Math.round(100 * event.loaded / event.total);
      console.log(loaded);
      break;
      case HttpEventType.Response:
      return event.body;
    }
  }
  constructor( private http: HttpClient ) { }

  spaceX() {
    const request = new HttpRequest('GET', environment.url + 'launches', { reportProgress: true });
    return this.http.request(request);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {
  constructor(private client: HttpClient) {}

  getJoke(): Observable<Joke> {
    return this.client.get<Joke>('https://api.chucknorris.io/jokes/random?category=dev');
  }

}

export interface Joke {
  category: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}



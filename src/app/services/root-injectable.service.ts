import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootInjectableService {
  persistentData = "I'm a variable inside a singleton."

  constructor() { }
}

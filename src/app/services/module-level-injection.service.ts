import { Injectable } from '@angular/core';

@Injectable()
export class ModuleLevelInjectionService {
  values: string[] = ['one', 'two'];

  constructor() { }
}

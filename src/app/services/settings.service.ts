import { Injectable } from '@angular/core';
import { Settings } from '../models/setting';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings:Settings={
    allowRgistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit:true
  }
  constructor() { }

  getSettings():Settings{
    return this.settings;
  }
}

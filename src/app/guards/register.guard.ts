import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class RegisterGuard implements CanActivate{

    constructor(
        private router: Router,
        private settingService: SettingsService

    ){}

    canActivate(): boolean{
       if(this.settingService.getSettings().allowRgistration){
           return true;
       }else{
           this.router.navigate(['/login']);
           return false;
       }
    }
}
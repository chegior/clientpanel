import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { Router } from '@angular/router';

import { Settings } from '../../models/setting';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;

  constructor(
    private settingsService:SettingsService,
    private router: Router,
    private flashMessages:FlashMessagesService
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings(); 
  }
  onSubmit(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessages.show("Settings Saved",{cssClass:'alert-success',timeout:4000});
  }

}

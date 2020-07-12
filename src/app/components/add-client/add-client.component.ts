import { Component, OnInit, ViewChild } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';

import { Client } from "../../models/client"
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client:Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }

  disableBalanceOnAdd:boolean = true; //linked to the Setting App
  @ViewChild('clientForm',{static:true}) form: any;
  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private route:Router
    ) { }

  ngOnInit() {
  }

  onSubmit({value,valid}:{value:Client, valid:boolean}){
   if (this.disableBalanceOnAdd){
     value.balance = 0; //due to the form does not provide this value
   }
   if (!valid){
     //show error throw FlashMEssages
     this.flashMessage.show("Please fill out the form correctly",{cssClass:'alert-danger',timeout:4000});
     
     

   }else{
    this.flashMessage.show("Client has been added, Succesfully", {cssClass:'alert-success',timeout:4000});
    this.clientService.newClient(value);
    this.route.navigate(['/']);
   }

  }

}

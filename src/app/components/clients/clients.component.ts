import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:Client[];
  totalOwed: number;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(val=>{
      this.clients = val;
     this.getTotalOwed();
    })
  }

  getTotalOwed(){
    this.totalOwed = this.clients.reduce((total,client)=>{
      return total + parseFloat(client.balance.toString());
    },0);
    
  }

}

import {Component, OnInit} from '@angular/core';
import {PersonaService} from "./persona.service";
import {PersonaModel} from "./persona.model";
import {LogginServiceService} from "./LogginService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Listado de Personas';
  personas: PersonaModel[] = []

  constructor(
    private logginService: LogginServiceService,
    private personaService: PersonaService
  ) {
  }

  ngOnInit() {
    this.personas = this.personaService.personas
  }

}

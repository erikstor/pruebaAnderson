import {PersonaModel} from "./persona.model";
import {LogginServiceService} from "./LogginService.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()

export class PersonaService {
  personas: PersonaModel[] = [
    new PersonaModel('Argemiro', 'De Ejemplo'),
    new PersonaModel('Laura', 'De Argemiro :V'),
    new PersonaModel('Natalia', 'De Argemiro :V'),
  ]

  saludar = new EventEmitter<number>()

  constructor(private logginService: LogginServiceService) {
  }

  personaAgregada(persona: PersonaModel) {
    this.logginService.enviaMensajeAConsola('ayyyyyyyyyyy papiiiiiiiiiiiiiiiiiiiiiii')
    this.personas.push(persona)
  }



}

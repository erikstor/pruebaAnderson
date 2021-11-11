import {Component} from '@angular/core';
import {PersonaModel} from "../persona.model";
import {LogginServiceService} from "../LogginService.service";
import {PersonaService} from "../persona.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LogginServiceService]
})
export class FormularioComponent {

  nombreInput: string = ''
  apellidoInput: string = ''

  // @Output() personaCreada = new EventEmitter<PersonaModel>()

  constructor(private logginService: LogginServiceService,
              private personasService: PersonaService
  ) {
    this.personasService.saludar.subscribe((indice: number) => {
      alert("el indice es " + indice)
    })
  }

  agregarPersona() {
    const persona = new PersonaModel(this.nombreInput, this.apellidoInput)
    //this.personas.push(persona)
    // this.logginService.enviaMensajeAConsola('Funciono mor ' + persona)
    this.personasService.personaAgregada(persona)
    // this.personaCreada.emit(persona)
  }

}

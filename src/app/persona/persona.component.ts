import {Component, Input} from '@angular/core';
import {PersonaModel} from "../persona.model";
import {PersonaService} from "../persona.service";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: PersonaModel;
  @Input() indice: number;

  constructor(private personaService: PersonaService) {
  }

  emitirSaludo = () => {
    this.personaService.saludar.emit(this.indice)
  }

}

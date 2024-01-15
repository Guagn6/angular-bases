import { Injectable } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
    providedIn: 'root'
})
export class DbzService{

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name: 'Goku',
        power: 10000
    },{
        id: uuid(),
        name: 'Veggeta',
        power: 9000
    }];

    addNewCharacter(character: Character):void{
        const newCharacter: Character = { id: uuid(), ...character }; //Hacer esto es lo mismo que declarar todos los
        //atributos como en el ejemplo de abajo.

        /* const newCharacter: Character = {
            id: uuid(),
            name: character.name,
            power: character.power
        } */
        this.characters.push(newCharacter);
        console.log('characters', this.characters);
    }

    deleteCharacterById(id: string){
        //this.characters.splice(index, 1);
        this.characters = this.characters.filter( character => character.id !== id );
    }
    
    constructor(){} 
}
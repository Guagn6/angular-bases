import { Component } from "@angular/core";
import { Character } from '../interfaces/character.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent {

    constructor(
        private dbzService: DbzService
    ){}

    get characters(): Character[]{
        return [...this.dbzService.characters];
    }

    addNewCharacter(charcter: Character): void{
        this.dbzService.addNewCharacter(charcter);
    }

    deleteCharacterById(id: string): void{
        this.dbzService.deleteCharacterById(id);
    }
}
import { Component , OnInit } from '@angular/core';
import {CartoonCharacter} from '../cartoon-character';
import {DUMMY_DATA} from '../data/dummy-data';
import {CartoonCharacterService} from '../cartoon-character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cartoon-character-component',
  templateUrl: './cartoon-character.component.html',
  styleUrls: ['./cartoon-character.component.css']

})

export class CartoonCharacterComponent implements OnInit {
  
  constructor(
  private cartoonService: CartoonCharacterService,
  private router: Router
  ) { }

  /*
    character: CartoonCharacter = {
    PersonId: 1,
    FirstName: "Fred",
    LastName: "Flintstone",
    Occupation: "Mining Manager",
    Gender: "M",
    Picture:  "http://flintstones.zift.ca/images/flintstone/fred.png",
  };
  */
  selected: CartoonCharacter;
  
  characters: CartoonCharacter[];
  
  onSelect(character: CartoonCharacter): void {
    this.selected = character;
  
  }

  getCartoonCharacters(): void {
     this.cartoonService.getCartoonCharacters()
      .then(results => this.characters = results);
  }

  ngOnInit(): void {
      this.getCartoonCharacters();
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selected.PersonId]);
}

newCharacter: CartoonCharacter = new CartoonCharacter();
add(newCartoonCharacter: CartoonCharacter): void {
  newCartoonCharacter.FirstName = newCartoonCharacter.FirstName.trim();
  newCartoonCharacter.LastName = newCartoonCharacter.LastName.trim();
  newCartoonCharacter.Occupation = newCartoonCharacter.Occupation.trim();
  newCartoonCharacter.Gender = newCartoonCharacter.Gender.trim();
  newCartoonCharacter.Picture = newCartoonCharacter.Picture.trim();
  
  if (!newCartoonCharacter) { return; }
  this.cartoonService.create(newCartoonCharacter)
    .then(newCartoonCharacter => {
      this.selected = null;
      this.router.navigate(['./dashboard']);
    });
}

delete(delCharacter: CartoonCharacter): void {
  this.cartoonService
      .delete(delCharacter.PersonId)
      .then(() => {
        this.characters = this.characters.filter(c => c !== delCharacter);
        if (this.selected === delCharacter) { this.selected = null; }
      });
}

}
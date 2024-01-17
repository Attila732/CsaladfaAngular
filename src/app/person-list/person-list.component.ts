// person-list.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  familyTree: any[] = []; // Az adatok típusát pontosítsd a tényleges adatok típusára.
  newPerson: any = { name: '', birthDate: '' }; // Az új személy adatainak tárolására.

  addPerson(): void {
    // Ellenőrizd, hogy az új személy nevének és születési dátumának van-e értéke.
    if (this.newPerson.name && this.newPerson.birthDate) {
      // Másolj egy új objektumot, hogy ne manipuláld az eredeti adatokat.
      const newPersonCopy = { ...this.newPerson };
      // Az új személy hozzáadása a családfa tömbhöz.
      this.familyTree.push(newPersonCopy);
      // Az új személy adatainak nullázása az űrlap tisztításához.
      this.newPerson = { name: '', birthDate: '' };
    }
  }

  deletePerson(index: number): void {
    // Töröld az adott indexű személyt a családfa tömbből.
    this.familyTree.splice(index, 1);
  }
}

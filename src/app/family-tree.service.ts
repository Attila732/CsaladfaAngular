// family-tree.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyTreeService {
  private apiUrl = 'http://localhost:3000/api/familyTree'; 

  constructor(private http: HttpClient) { }

  getFamilyTree(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPerson(person: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, person);
  }

  deletePerson(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

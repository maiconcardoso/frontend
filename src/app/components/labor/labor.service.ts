import { Observable } from 'rxjs';
import { Labor } from './labor.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaborService {

  baseUrl = "http://localhost:3001/labor"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(labor: Labor): Observable<Labor> {
    return this.http.post<Labor>(this.baseUrl, labor)
  }

  read(): Observable<Labor[]> {
    return this.http.get<Labor[]>(this.baseUrl)
  }

  readById(id: string): Observable<Labor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Labor>(url)
  }

  update(labor: Labor): Observable<Labor> {
    const url = `${this.baseUrl}/${labor.id}`
    return this.http.put<Labor>(url, labor)
  }

  delete(labor: Labor): Observable<Labor> {
    const url = `${this.baseUrl}/${labor.id}`
    return this.http.delete<Labor>(url)
  }

}

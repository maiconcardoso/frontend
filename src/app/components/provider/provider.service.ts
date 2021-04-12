import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Provider } from './provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  baseUrl: string = "http://localhost:3001/provider"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(this.baseUrl, provider)
  }

  read():Observable<Provider[]> {
    return this.http.get<Provider[]>(this.baseUrl)
  }

  readById(id: string): Observable<Provider> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Provider>(url)
  }

  update(provider: Provider): Observable<Provider> {
    const url = `${this.baseUrl}/${provider.id}`
    return this.http.put<Provider>(url, provider)
  }

  delete(provider: Provider): Observable<Provider> {
    const url = `${this.baseUrl}/${provider.id}`
    return this.http.delete<Provider>(url)
  }
}

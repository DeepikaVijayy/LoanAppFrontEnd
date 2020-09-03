import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../common/loan';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private baseUrl = 'http://localhost:8012';

  // inject httpclient
  constructor(private httpClient: HttpClient) { }

// Map JSON data from Spring Data rest to Loan array
  getLoanList(): Observable<Loan[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.loans));
  }

   
  searchLoans(id: any) {
    // need to build URL based on the loan id 
    const searchUrl = `${this.baseUrl}/loans/findById?id=${id}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.loans));
  }
}

// to unwrap the JSON from spring data rest
interface GetResponse{
  _embedded:{
    loans: Loan[];
  }
}
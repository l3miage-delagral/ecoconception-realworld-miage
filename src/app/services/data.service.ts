import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, retry, throwError, timeout } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private apiUrl = "https://api.example.com";

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }

  putData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data);
  }

  deleteData(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }

  patchData(endpoint: string, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${endpoint}`, data);
  }

  getDataWithParams(endpoint: string, params: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, { params });
  }

  postDataWithHeaders(
    endpoint: string,
    data: any,
    headers: any
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, { headers });
  }

  getDataWithAuth(endpoint: string, token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${this.apiUrl}/${endpoint}`, { headers });
  }

  getDataWithRetry(endpoint: string, retryCount: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`).pipe(retry(retryCount));
  }

  getDataWithTimeout(endpoint: string, timeoutMs: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`).pipe(timeout(timeoutMs));
  }

  getDataWithCatchError(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`).pipe(
      catchError((error) => {
        console.error("Error occurred:", error);
        return throwError(error);
      })
    );
  }

  // Add more methods for other HTTP requests as needed
}

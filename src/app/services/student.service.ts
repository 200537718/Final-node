import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://httpbin.org'; // Use the provided backend service URL

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get`);
  }

  getStudentById(studentId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get?id=${studentId}`);
  }

  createStudent(studentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/post`, studentData);
  }

  updateStudent(studentId: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/put?id=${studentId}`, updatedData);
  }
  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${studentId}`);
  }}
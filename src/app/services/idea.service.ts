import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idea } from '../models/idea';
import { environment } from '../../enviroments/environment';
import { Observable,} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private Http: HttpClient) { }
  // Method to create a new idea
  createIdea(newIdea:Idea):Observable<Idea>{
  return this.Http.post<Idea>(environment.ideasUrl, newIdea);
  }

  // Method to get all ideas
  getIdeas():Observable<Idea[]> {
    return this.Http.get<Idea[]>(environment.ideasUrl);
  }
// method to get idea by id
getIdeaByID(id:string|null): Observable<Idea> {
 return this.Http.get<Idea>(`${environment.ideasUrl}/${id}`)
}
}

import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  user = JSON.parse(localStorage.getItem('FundooUser')!);

  constructor(
    private httpService: HttpServiceService
  ) { }

  CreateNote(data: any){
    const params = {
      Title : data.title,
      Description : data.description,
      UserId : this.user.UserId
    }
    return this.httpService.post(`${environment.baseUrl}/api/addNote`, params, true,{
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  GetNotes(){
    var userId = this.user.UserId;
    return this.httpService.get(`${environment.baseUrl}/api/GetNotes?userId=${userId}`, true,{
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  MoveIntoTrash(notesId: number){
    return this.httpService.put(`${environment.baseUrl}/api/DeleteNoteMoveToTrash?notesId=${notesId}`,null, true,{
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  EditNote(data: any){
    const params = {
      Title : data.note.title,
      Description: data.note.description,
      NotesId: data.note.notesId
    }
    return this.httpService.put(`${environment.baseUrl}/api/updateNote`,params, true, {
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

}

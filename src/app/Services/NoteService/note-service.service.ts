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

  GetTrashNotes(){
    var userId = this.user.UserId;
    return this.httpService.get(`${environment.baseUrl}/api/GetTrashNotes?userId=${userId}`, true, {
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  DeleteForever(notesId: any)
  {
    return this.httpService.delete(`${environment.baseUrl}/api/DeleteaNoteFromTrash?notesId=${notesId}`, true, {
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  Restore(notesId: any)
  {
    return this.httpService.put(`${environment.baseUrl}/api/RestoreFromTrash?notesId=${notesId}`,null, true, {
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  GetArchive(){
    var userId = this.user.UserId;
    return this.httpService.get(`${environment.baseUrl}/api/GetArchiveNotes?userId=${userId}`, true, {
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  Archive(notesId:any){
    return this.httpService.put(`${environment.baseUrl}/api/archive?notesId=${notesId}`, null, true,{
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  Unarchive(notesId:any){
    return this.httpService.put(`${environment.baseUrl}/api/unarchive?notesId=${notesId}`, null, true,{
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }

  Color(noteId: any, color: any){
    return this.httpService.put(`${environment.baseUrl}/api/UpdateColor?noteId=${noteId}&color=${color}`,null, true,{
      headers: {Authorization:"Bearer "+this.user.Token}
    } );
  }



}

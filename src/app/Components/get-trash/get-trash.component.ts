import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent implements OnInit {
  notes: any = [];

  constructor(
    private noteService:NoteServiceService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getTrashNotes();
  }

  getTrashNotes(){
    this.noteService.GetTrashNotes()
    .subscribe((result:any)=>{
      console.log(result);
      this.notes = result.data;
      console.log(this.notes);
    })
  }

  deleteForever(note:any){
    this.noteService.DeleteForever(note.notesId)
    .subscribe((result:any)=>{
      console.log(result);
      this.snackBar.open(`${result.message}`, '', {
        verticalPosition:'bottom',
        horizontalPosition:'left',
        duration:5000});
      this.notes = result.data;
      console.log(this.notes);
    })
  }

}

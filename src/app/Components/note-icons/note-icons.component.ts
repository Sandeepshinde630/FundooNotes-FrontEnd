import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  archive:any;
  moreMenu = false;

  constructor(
    private noteService:NoteServiceService,
    public snackBar: MatSnackBar
  ) { }
  
  @Input() notes: any;

  ngOnInit(): void {
  }
  
  MoveIntoTrash(){
    this.noteService.MoveIntoTrash(this.notes.notesId)
    .subscribe((result:any)=>{
      console.log(result);
      this.snackBar.open(`${result.message}`, '', {
        verticalPosition:"bottom",
        horizontalPosition:"left",
        duration:5000});
    })
  }
}

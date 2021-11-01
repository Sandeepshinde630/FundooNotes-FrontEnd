import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  isPin = false;

  constructor(
    private noteService: NoteServiceService,
    public dialogRef: MatDialogRef<EditNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  EditNote(){
    console.log(this.data);
    this.noteService.EditNote(this.data)
    .subscribe((result:any)=>{
      console.log(result);
      console.log(this.data);
    })
  }

}

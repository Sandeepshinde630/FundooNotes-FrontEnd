import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { NoteIconsComponent } from '../note-icons/note-icons.component';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  CreateNoteForm !: FormGroup;
  show = false;
  isPin = false;
  noteColor = "white";
  create: any;

  constructor(
    
    private noteService: NoteServiceService,
    public snackBar : MatSnackBar,
    private data : DataServiceService
  ) { }

  ngOnInit(): void {
    this.CreateNoteForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    });
  }
  @ViewChild(NoteIconsComponent) public noteIcons: any;

  AddNote(){
    const params = {
      title : this.CreateNoteForm.value.title,
      description : this.CreateNoteForm.value.description
    }
    this.noteService.CreateNote(params)
    .subscribe((result:any)=>{
      this.data.changeMessage(true);
      console.log(result);
      this.snackBar.open(`${result.message}`, '', {
        duration:5000,
        verticalPosition:'bottom',
        horizontalPosition:'left'
      });
      this.show = false;
      this.CreateNoteForm.reset();
    }, (error: HttpErrorResponse) => {
      if(!error.error.status){
        this.snackBar.open(`${error.error.message}`, '', {
          duration:5000,
          verticalPosition:'bottom',
          horizontalPosition:'left'
        });
      }
    })
  }

  Color(){
    var cardColor = document.getElementsByClassName('hiddenCard');
    this.noteColor = this.noteIcons.noteColor;
  }

}



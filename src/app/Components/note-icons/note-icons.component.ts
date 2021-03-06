import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  archive:any;
  moreMenu = false;
  noteColor: any = "white";

  colorsList: any = [] = [
    {
      "color" : "white", "toolTip": "default", "icon" : true
    },
    {
      "color" : "rgb(230, 107, 107)", "toolTip": "red", "icon" : false
    },
    {
      "color" : "rgb(223, 158, 39)", "toolTip": "orange", "icon" : false
    },
    {
      "color" : "rgb(230, 230, 91);", "toolTip": "yellow", "icon" : false
    },
    {
      "color" : "rgb(105, 202, 105)", "toolTip": "green", "icon" : false
    },
    {
      "color" : "rgb(116, 235, 235)", "toolTip": "teal", "icon" : false
    },
    {
      "color" : "rgb(173, 173, 211)", "toolTip": "blue", "icon" : false
    },
    {
      "color" : "rgb(91, 91, 168)", "toolTip": "dark blue", "icon" : false
    },
    {
      "color" : "rgb(194, 144, 194)", "toolTip": "purple", "icon" : false
    },
    {
      "color" : "rgb(243, 201, 208)", "toolTip": "pink", "icon" : false
    },
    {
      "color" : "rgb(192, 141, 141)", "toolTip": "brown", "icon" : false
    },
    {
      "color" : "rgb(128, 128, 128)", "toolTip": "gray", "icon" : false
    },
  ]
  
  constructor(
    private noteService:NoteServiceService,
    public snackBar: MatSnackBar,
    public data: DataServiceService
  ) { }
  
  @Input() notes: any;

  ngOnInit(): void {
  }
  
  MoveIntoTrash(){
    this.noteService.MoveIntoTrash(this.notes.notesId)
    .subscribe((result:any)=>{
      this.data.changeMessage(true);
      console.log(result);
      this.snackBar.open(`${result.message}`, '', {
        verticalPosition:"bottom",
        horizontalPosition:"left",
        duration:5000});
    })
  }

  isArchive(){
    if(this.archive == true){
      this.noteService.Archive(this.notes.notesId)
      .subscribe((result:any)=>{
        this.data.changeMessage(true);
        console.log(result);
      })
    }
    else{
      this.noteService.Unarchive(this.notes.notesId)
      .subscribe((result:any)=>{
        this.data.changeMessage(true);
        console.log(result);
        this.snackBar.open(`${result.message}`, '', {
          verticalPosition:"bottom",
          horizontalPosition:"left",
          duration:5000});
      })
    }
  }

  changecolor(color:any){
    this.noteColor = color;
    for(var col of this.colorsList){
      col.icon = col.color == color ? true : false;
    }
  }
}

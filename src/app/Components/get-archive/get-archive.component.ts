import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/DataService/data-service.service';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-get-archive',
  templateUrl: './get-archive.component.html',
  styleUrls: ['./get-archive.component.scss']
})
export class GetArchiveComponent implements OnInit {
  notes: any = [];

  constructor(
    private noteService:NoteServiceService,
    public data:DataServiceService
  ) { }

  ngOnInit(): void {
    this.GetArchive();
  }

  GetArchive(){
    this.noteService.GetArchive()
    .subscribe((result: any)=>{
      this.data.changeMessage(true);
      console.log(result);
      this.notes = result.data;
      console.log(this.notes);
    })
  }

}

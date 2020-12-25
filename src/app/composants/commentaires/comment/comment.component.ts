import { Component,Input,OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'Kha-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() com:Commentaire;
  @Input() indice:number;
  constructor() {}

  ngOnInit(): void {
  }

}
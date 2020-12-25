import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { MaterielService } from 'src/app/services/materiel.service';
import { Materiel } from '../../../models/materiel';

@Component({
  selector: 'Kha-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean =false;
  materiel:Materiel;
id:string;
 /*
onClick(){
  this.afficher = !this.afficher;
}*/

constructor(private detailmaterielService:MaterielService,private activatedRoute:ActivatedRoute,private routage:Router) { }

ngOnInit(): void {
  this.id= this.activatedRoute.snapshot.params['id'];
 this.materiel = this.detailmaterielService.getMaterielById(this.id);
  }
  onretour()
  {this.routage.navigate(['/informatique']);}

}
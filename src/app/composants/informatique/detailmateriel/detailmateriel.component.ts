import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  
  
 
onClick(){
  this.afficher = !this.afficher;
}

constructor(private activatedRoute:ActivatedRoute) { }
ngOnInit(): void {
 this.materiel = this.activatedRoute.snapshot.params["id"];
  }
 
 

}

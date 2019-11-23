import { Component, OnInit } from '@angular/core';
import { CoresService } from '../cores.service';


@Component({
  selector: 'app-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.css']
})
export class CoresComponent implements OnInit {
  public cores:Array<string> =[];
  public cor:string;
  constructor(private service:CoresService) { }

  ngOnInit() {
    this.cores = this.service.getCores();
    this.service.getCorAtual()
    .subscribe(cor => this.cor = cor)
  }

  public changeCor(cor:string):void{
    alert(`Nova cor Selecionada: ${cor}`)
    this.service.setCorAtual(cor);
  }
}

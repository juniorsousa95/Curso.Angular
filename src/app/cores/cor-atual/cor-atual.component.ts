import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CoresService } from 'src/app/cores.service';

@Component({
  selector: 'app-cor-atual',
  templateUrl: './cor-atual.component.html',
  styleUrls: ['./cor-atual.component.css']
})

export class CorAtualComponent implements OnInit {

  @Input()
  public cor:string = ""
  @Output('changeColor')
  public click = new EventEmitter();
  constructor(private service:CoresService) { }

  ngOnInit() {

  }
  public onLinhaSelecionada(){
  this.click.emit(this.cor)
  }

}

import {Component, OnInit} from '@angular/core'


@Component({
    selector:'app-hello',
    templateUrl:'./hello.component.html',
    styleUrls:['./hello.component.css']
})
export class HelloComponent implements OnInit{

    public title:string
    public numero1:number
    public numero2:number
    public nome:string

    constructor(){}

    ngOnInit(){
        this.title = 'Título Principal';
        this.numero1 = 3;
        this.numero2 = 2;
        this.nome = 'Cristiane Ortiz';
    }

    getMensagem():string{
        return 'Mensagem padrão do sistema'
    }
}


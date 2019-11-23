import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class CoresService{

    private cores: Array<string> = ["Verde", "Amarelo", "Azul", "Branco", "Vermelho"]
    public corAtual:string = "";
    constructor(){}

    public getCores():Array<string>{
        return this.cores;
    }

    
    public setCorAtual(cor:string):void{
    this.corAtual = cor;
    }

    public getCorAtual():Observable<string>{
    return of(this.corAtual)
    }

}

    

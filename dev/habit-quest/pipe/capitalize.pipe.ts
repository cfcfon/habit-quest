import {Pipe, PipeTransform} from "angular2/core";

@Pipe({name:'capitalize'})
export class CapitalizePipe{

    transform(value:string, args:string[]):any{
        return value !== null ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
    }

}
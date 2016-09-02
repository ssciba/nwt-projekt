import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
     name:'search',
    


})
export class searchPipe implements PipeTransform{

    transform(value,search) {

        return value.filter(item=>item.username.startsWith(search));
    }

}
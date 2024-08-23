import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: any, ...args: unknown[]): unknown {
    return `${address?.street}, ${address?.suite}, ${address?.city}, ${address?.zipcode}` ;
  }

}

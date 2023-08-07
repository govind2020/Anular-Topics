import { Injectable } from '@angular/core';

interface dataType {
  name: string,
  id : number,
  indian: boolean,
  address : any
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userdata(){
    const data :dataType={
      name : 'govind',
      id : 12,
      indian : true,
      address : "202 khopoli"
    }

  }


}

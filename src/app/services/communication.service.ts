
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class CommunicationService{

     private messageStream=new Subject<string>();

  publish(message:string):void{
    this.messageStream.next(message);
  }
  register():Observable<string>{
      return this.messageStream.asObservable();
  }

}

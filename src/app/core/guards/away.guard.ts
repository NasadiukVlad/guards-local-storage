import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';


export interface ComponentCanDeactivate {
  canDeactivate: ()
    => Observable<boolean>
    | Promise<boolean> | boolean;
}

@Injectable()
export class AwayGuard
  implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate):
    Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}




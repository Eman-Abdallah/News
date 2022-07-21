import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { PreloaderComponent } from './preloader/preloader.component';
@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable().pipe(delay(1));

  constructor(private componentFactoryResolver: ComponentFactoryResolver,private appRef: ApplicationRef,private injector: Injector) { }

  showLoader() {
    this.appendComponentTo();
    this._loading.next(true);
  }

  hideLoader() {
    this.removeComponent();
    this._loading.next(false);
  }

  appendComponentTo(){
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(PreloaderComponent)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
  }

  removeComponent(){
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(PreloaderComponent)
      .create(this.injector);

      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();

}
}

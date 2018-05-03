import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Blog Angular by Flo';
  secondes: number;
  counterSubscription: Subscription;
  constructor() {
  }
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
        (value: number) => {
          this.secondes = value;
        }
    );
  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}

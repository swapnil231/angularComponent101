import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`value changed`, changes['init'].currentValue);
    this.startcoundown();
  }
  ngOnDestroy(): void {
    this.cleartime();
  }
  @Output() onDescrse = new EventEmitter<number>();
  @Output() oncomplete = new EventEmitter<void>();
  ngOnInit(): void {
    this.startcoundown();
  }

  private counterref: any = null;
  @Input() init!: number;
  counter = 0;
  startcoundown() {
    if (this.init && this.init > 0) {
      this.cleartime();
      this.counter = this.init;
      this.docowntdown();
    }
  }
  docowntdown() {
    this.counterref = setInterval(() => {
      if (this.counter === 0) {
        return;
      }
      this.counter--;
      this.check();
    }, 1000);
  }
  private cleartime() {
    if (this.counterref) {
      clearTimeout(this.counterref);
      this.counterref = null;
    }
  }
  check() {
    this.onDescrse.emit(this.counter);
    if (this.counter === 0) {
      console.log('counter end');
      this.oncomplete.emit();
    } else {
      console.log(`counter value ${this.counter}`);
    }
  }
}

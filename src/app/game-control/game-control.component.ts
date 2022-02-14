import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-game-control",
    templateUrl: "./game-control.component.html",
    styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
    count: number = 0;
    interval: any;
    @Output() intervalFired = new EventEmitter();
  
    constructor() {}

    ngOnInit(): void {}

    increment() {
        this.interval = setInterval(() => {
            let number = this.count++;
            this.intervalFired.emit(number + 1);
        }, 1000);
    }

    clear() {
        clearInterval(this.interval);
    }
}

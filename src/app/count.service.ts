import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class CountService {
    counterToInactive: number = 0;
    counterToActive: number = 0;

    constructor() {}

    countToInactive () {
        this.counterToInactive ++;
        console.log("Active => Inactive: " + this.counterToInactive);
    }

    countToActive () {
        this.counterToActive ++;
        console.log("Inactive => Active: " + this.counterToActive);
    }
}

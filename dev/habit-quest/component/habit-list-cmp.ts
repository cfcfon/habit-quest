import {Component} from "angular2/core";
import {HabitService} from "../service/habit.service";
import {Habit} from "../shared/habit";
import {OnInit} from "angular2/core";

@Component({
    selector: 'habit-list',
    template: `
        <h5>Habit List</h5>
        <ul>
            <li *ngFor="#habit of habits"> {{habit.text}}</li>
        </ul>
    `
})

export class HabitListComponent implements OnInit{

    public habits: Habit[];

    constructor(private _habitService: HabitService){}


    ngOnInit():any {
        this._habitService.getAllHabits().then((habits: Habit[]) => {
            this.habits = habits;
        });
    }
}
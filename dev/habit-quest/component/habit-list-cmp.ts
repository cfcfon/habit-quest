import {Component} from "angular2/core";
import {HabitService} from "../service/habit.service";
import {Habit} from "../shared/habit";
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    selector: 'habit-list',
    template: `
        <h5>Habit List</h5>
        <button (click)="onAdd()">Add Quest</button>
        <ul>
            <li *ngFor="#habit of habits">
                <input type="checkbox" [(ngModel)]="habit.done">
                <span (click)="onSelected(habit)"
                      [class.habits__list--done]="habit.done"
                      [class.clicked]="selected === habit">
                      {{habit.text}}
                </span>
                <button (click)="onEdit(habit)">Edit</button>
            </li>
        </ul>
    `,
    styleUrls: ['src/css/habit.css']
})

export class HabitListComponent implements OnInit{

    habits: Habit[];
    selected: Habit = null;

    constructor(private _habitService: HabitService, private _router: Router){}

    onSelected(habit: Habit){
        this.selected = habit;
    }

    onAdd(){
        this._router.navigate(['Edit', {editMode: 'create'}])
    }

    onEdit(habit: Habit){
        this._router.navigate(['Edit', {editMode: 'edit', index: Number(this._habitService.getIndexOfHabit(habit))}]);
    }

    ngOnInit():any {
        this._habitService.getAllHabits().then((habits: Habit[]) => {
            this.habits = habits;
        });
    }
}
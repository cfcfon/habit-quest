import {Component} from "angular2/core";
import {HabitService} from "../service/habit.service";
import {Habit} from "../shared/habit";
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {CapitalizePipe} from "../pipe/capitalize.pipe";

@Component({
    selector: 'habit-list',
    template: `
        <h5>Habit List</h5>
        <button (click)="onAdd()">Add Quest</button>
        <ul>
            <li *ngFor="#habit of habits" class="habits__list" >
                <input type="checkbox" [(ngModel)]="habit.done">
                <span (click)="onSelected(habit)"
                      [class.habits__list--done]="habit.done"
                      [class.clicked]="selected === habit"
                      >
                      {{habit.text|capitalize}}
                </span>
                <div *ngIf="selected === habit">
                <button (click)="onEdit(habit)">Edit</button>
                <button (click)="onDelete(habit)">Delete</button>
                </div>

            </li>
        </ul>
    `,
    styleUrls: ['src/css/habit.css'],
    pipes: [CapitalizePipe]
})

export class HabitListComponent implements OnInit{

    habits: Habit[];
    selected: Habit = null;

    constructor(private _habitService: HabitService, private _router: Router){}

    onSelected(habit: Habit){
        if(this.selected != habit){
            this.selected = habit;
        }else {
            this.selected = null;
        }
    }

    getAllHabits(){
        this._habitService.getAllHabits().then((habits: Habit[]) => {
            this.habits = habits;
        });
    }

    onAdd(){
        this._router.navigate(['Edit', {editMode: 'create'}])
    }

    onEdit(habit: Habit){
        this._router.navigate(['Edit', {editMode: 'edit', index: Number(this._habitService.getIndexOfHabit(habit))}]);
    }

    onDelete(habit: Habit){
        this._habitService.deleteHabit(habit);
    }

    ngOnInit():any {
        this.getAllHabits();
    }
}
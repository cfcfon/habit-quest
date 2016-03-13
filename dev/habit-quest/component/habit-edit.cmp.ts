import {Component} from "angular2/core";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {Habit} from "../shared/habit";
import {HabitService} from "../service/habit.service";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";
import {CanDeactivate} from "angular2/router";
import {ComponentInstruction} from "angular2/router";

@Component({
    selector: 'habit-edit',
    template:`
        <h5>Habit Edit</h5>
        <a (click)="onBack()">Back</a>

        <form class="habits__form" [ngFormModel]="myForm" #f="ngForm" (ngSubmit)="onSubmit()">
             <button type="submit" [disabled]="!f.valid">Save</button>
             <input type="checkbox" [ngFormControl]="myForm.controls['done']">
             <input type="text" [ngFormControl]="myForm.controls['text']" #text>
        </form>
    `,
    styleUrls: ['src/css/habit.css']
})

export class HabitEditComponent implements OnInit, CanDeactivate{

    myForm: ControlGroup;
    habit: Habit;

    private _habitIndex: number;
    private _editMode = 'create';
    private _submitted = false;

    constructor(private _routeParams: RouteParams, private _router: Router,
                private _habitService: HabitService,
                private _fbBuilder: FormBuilder){}


    onSubmit(){
        this.habit = this.myForm.value;

        if(this._editMode === 'edit'){
            this._habitService.updateHabit(this._habitIndex, this.habit);
        }else {
            this._habitService.insertHabit(this.habit);
        }
        this._submitted = true;
        this.navigateBack();
    }

    onBack(){
        this.navigateBack();
    }

    private navigateBack(){
        this._router.navigate(['HabitList']);
    }

    ngOnInit():any {

        this._editMode = this._routeParams.get('editMode');
        let fbText = '';
        let fbDone = false;

        if(this._editMode === 'edit'){
            this._habitIndex = +this._routeParams.get('index');
            this.habit = this._habitService.getHabit(this._habitIndex);
            fbText = this.habit.text;
            fbDone = this.habit.done;
        }

        this.myForm = this._fbBuilder.group({
            text: [fbText, Validators.required],
            done: [fbDone]
        });
    }


    routerCanDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        if(this._submitted || this.myForm.pristine){
           return true;
        }
        return confirm('Sure?');
    }
}
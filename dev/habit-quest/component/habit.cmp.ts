import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {HabitListComponent} from "./habit-list-cmp";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HabitService} from "../service/habit.service";
import {HabitEditComponent} from "./habit-edit.cmp";

@Component({
    selector: 'habit',
    template: `
       <h4>Habit Component</h4>
       <router-outlet></router-outlet>
    `,
    directives: [HabitListComponent, ROUTER_DIRECTIVES],
    providers: [HabitService]

})

@RouteConfig([
    {path: '/', name:'HabitList', component:HabitListComponent, useAsDefault: true},
    {path: '/:editMode/', name:'Edit', component:HabitEditComponent}
])

export class HabitComponent{

}
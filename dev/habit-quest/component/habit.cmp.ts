import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {HabitListComponent} from "./habit-list-cmp";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HabitService} from "../service/habit.service";

@Component({
    selector: 'habit',
    template: `
       <h4>Habit Component</h4>
       <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HabitService]

})

@RouteConfig([
    {path: '/', name: 'HabitList', component: HabitListComponent, useAsDefault: true}
])

export class HabitComponent{

}
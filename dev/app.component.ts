import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HabitComponent} from "./habit-quest/component/habit.cmp";

@Component({
    selector: 'my-app',
    template:`
        <h3>Habit Quest Todo App</h3>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/...', name: 'HabitComponent', component: HabitComponent, useAsDefault:true}
])

export class AppComponent{

}
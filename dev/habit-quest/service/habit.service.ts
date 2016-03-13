import {Injectable} from "angular2/core";
import {HABITS} from "../mock/habits";
import {Habit} from "../shared/habit";

@Injectable()
export class HabitService{

    getAllHabits(){
        return Promise.resolve(HABITS);
    }

    getHabit(index: number){
        return HABITS[index];
        //return Promise.resolve(HABITS[index]);
    }

    getIndexOfHabit(habit: Habit){
        return HABITS.indexOf(habit);
    }

    insertHabit(habit: Habit){
        HABITS.push(habit);
    }

    insertAllHabits(habits: Habit[]){
        Array.prototype.push.apply(HABITS, habits);
    }

    deleteHabit(habit: Habit){
        HABITS.splice(HABITS.indexOf(habit), 1);
    }

    updateHabit(index: number, habit: Habit){
        HABITS[index] = habit;
    }

}
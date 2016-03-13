import {Injectable} from "angular2/core";
import {HABITS} from "../mock/habits";

@Injectable()
export class HabitService{

    getAllHabits(){
        return Promise.resolve(HABITS);
    }

}
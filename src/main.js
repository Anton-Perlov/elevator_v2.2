"use strict";

import createButtons from './fn-create-buttons'
import createFloors from './fn-create-floors'
import createShaft from './fn-create-shaft'
import createUsers from './fn-create-users'
import changeSettings from './fn-change-settings'
import userMove from './fn-user-move'



import './main.css'

const params = {
    FLOORS: 12,
    USERS_COUNT: 5,
    FLOOR_HEIGHT: 50,
    MOOVE_SPEED: 5,
    USER_MOOVE_SPEED: 15,
    CHANCE: 10
}

$(document).ready(function(){
    

    reInit();
    
    changeSettings(params);

    $('[data-toggle="tooltip"]').tooltip();
    
});
    
export function reInit(){
    console.log('document redy')

    createFloors(params);
    createShaft(params);
    createButtons(params);
    createUsers(params);
    userMove(params);

}
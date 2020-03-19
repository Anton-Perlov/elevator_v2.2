export default function userMove(params){

    $(".user").each(function(userId, user){
        walk(user, params); // make each user active
    });

}

export function walk(user, params){

    let newPosition = getNewPosition(user, params); // calculate new destination

    user.position = newPosition.position; // save current destination for calculating timnig in next move
    
    if(!user.waitLift){ // if user dont wait lift
        $(user).animate(
            {left: newPosition.position + "px"}, newPosition.timing, "linear", // walk
            function(){ // when user got the destination
                if(newPosition.wantChangeFloor){ // if user decided to change floor
                    user.wantMoveToFloor = newPosition.wantMoveToFloor;
                    user.wantChangeFloor = true;
                    user.waitLift = true;
                    $(user).find(".popover").html(user.wantMoveToFloor).show(); // show decided floor
                    
                    let elevator = $(".theElevator")[0];
                    if(user.currentFloor == elevator.floor && !elevator.move){ // check if lift in this floor
                        $(user).animate({"left": "-34px"}, 500,"linear"); // if true, come in
                    }
                } else {
                    walk(user, params); // walk again
                }
            }
        );
    }

    function getNewPosition(userObject, params){ // calculate
    
        const USER_MOOVE_SPEED = params.USER_MOOVE_SPEED
    
        let retVal = [];
        let maxLeft = parseInt($("#floors").outerWidth() - 32 ,10); // get maximum position
        
        retVal.position = Math.floor(Math.random() * maxLeft); // generate new position
        
        if(changeFloorDecision(params)){
            retVal.position = 0;
            retVal.wantChangeFloor = true;
            retVal.wantMoveToFloor = getNewFloor(userObject.currentFloor, params);
        }
    
        retVal.timing = Math.abs(userObject.position - retVal.position) * USER_MOOVE_SPEED; // calculate the timing of move
        
        return retVal;
    }

    function changeFloorDecision(params){
    
        const CHANCE = params.CHANCE
    
        if(Math.floor(Math.random() * CHANCE) ==1 ){
            return true;
        };
        return false;
    }
    
    function getNewFloor(currentFloor, params){
        
        let FLOORS = params.FLOORS
    
        let newFloor = Math.floor(Math.random() * FLOORS) + 1;
        if(FLOORS>1 && newFloor==currentFloor) {
            newFloor = getNewFloor(currentFloor,params);
        }
        return newFloor;
    }

}



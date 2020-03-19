import moveTo from './fn-move-to'

export default function createShaft(params){
    
    
    let elevatorShaft = $("#elevatorShaft")[0];
    $(elevatorShaft).html("<div class='theElevator'></div>").css({
        "min-width": params.FLOOR_HEIGHT * 0.75 + "px", 
        "max-width": params.FLOOR_HEIGHT * 0.75 + "px"
    });;
    
    //
    let elevator = $(".theElevator")[0];
    $(elevator).height(params.FLOOR_HEIGHT - 2).width((params.FLOOR_HEIGHT * 0.75) - 4);

    // Set elevator to last floor
    elevator.floor = params.FLOORS;
    elevator.style.top = (params.FLOORS - 1) + "px";
    
    moveTo(1, params); // Move lift to first floor
    
}
export default function createFloors(params){
    
    let floors = $("#floors")[0];
    $(floors).html("");


    for (let i = 0; i < params.FLOORS; i++) {
        $(floors).append("<div class='row floor' floor=" + (params.FLOORS - i) + "'>" + (params.FLOORS - i) + "</div>");
    }

    $(".floor").height(params.FLOOR_HEIGHT);
}
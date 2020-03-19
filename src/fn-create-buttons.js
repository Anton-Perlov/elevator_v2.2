import moveTo from './fn-move-to'


export default function createButtons(params) {
    
    let buttonsBlock = $("#buttons")[0];
    buttonsBlock.innerHTML = "";
    
    // Insert to floor selector box buttons
    for (let i = 0; i < params.FLOORS; i++) {
        $(buttonsBlock).append("<button type='button' class='btn btn-secondary navigateBtn' value='" + (params.FLOORS - i) + "'>" + (params.FLOORS - i) + "</button>");
    }
    
    setActive(params);
    
    return true;


    function setActive(params){

        // make buttons active
        $('.navigateBtn').on('click touch', function(){
            $('.navigateBtn').removeClass( "btn-success" ).addClass( "btn-secondary" );
            $(this).removeClass( "btn-secondary" ).addClass( "btn-success" );
            
            moveTo(this.value, params); // this function in fn-move-to.js file
        });
    }
};
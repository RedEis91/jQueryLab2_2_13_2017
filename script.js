$(document).ready(function() {
    $(".bigRightP").hide();
    
    $( ".normalP" ).click(function() {
        $(".normalP").hide();
       $(".bigRightP").show();
});
    $( ".bigRightP" ).click(function() {
        $(".normalP").show();
       $(".bigRightP").hide();
});
    
    
});
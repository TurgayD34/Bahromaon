function burgerNavigation(){
    var x = document.getElementById('burgerNav');
    if( x.className === "burger-nav"){
        x.className += " responsive";
    }
    else{
        x.className += "burger-nav";
    }
}
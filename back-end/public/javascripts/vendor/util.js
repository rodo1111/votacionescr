function changeNavbarName (tabName){
    var brandName = tabName.innerHTML;
    document.getElementById("_brandText").innerHTML = (brandName);
    //document.getElementById("").style.display = "block";
}

//En construccion, aun no funciona
function showFilterDrawer() {
    var myDrawer = document.getElementById("_filterDrawer");
    if (myDrawer.style.right == "0px"){
        myDrawer.style.right = "-360px";
    } else {
        myDrawer.style.right = "0px";
    }
}
function choisir (){
    var a =document.getElementsByName("Atelier");
    if (a[0].checked) {
        alert("vous aimez  la matiere:"+a[0].value);
    }
    else if (a[1].checked) {
        alert("vous aimez  la matiere:"+a[1].value);
    }
    else if (a[2].checked) {
        alert("vous aimez  la matiere:"+a[2].value);
    }
    else{
        alert("vous obliger de choisir un matiere")
    }
}
function ocultardivs() {

    $("div").html("Empieza el mareo");
    $("div").hide(3000,mostrardivs);

}
function mostrardivs() {

    $("div").show(3000,ocultardivs);

}


$(document).ready(function() {
    alert("He cargado");
    $("#uno").click(ocultardivs);
    $("a").click(
        function (comoquieras) {
            comoquieras.preventDefault();
            console.log($(this));
            console.log(this);
            console.log(comoquieras);
            $("div").show();
        }
    );
});

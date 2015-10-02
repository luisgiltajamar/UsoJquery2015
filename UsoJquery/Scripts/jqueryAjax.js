var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno";


function procesarJson(res) {
    var r = "";
    for (var i = 0; i < res.length; i++) {
        r += res[i].nombre + "<br />";

    }
    $("#resultado").html(r);

}

function conGet(e) {
    e.preventDefault();
    $.get(url,procesarJson);
}

function conGetJson(e) {
    e.preventDefault();
    $.getJSON(url,procesarJson);
}
function conPost(e) {
    e.preventDefault();
    var o = { nombre: "Luis", apellidos: "yo", edad: 22, nota: 7 };
    $.post(url,JSON.stringify(o),function(res) {
        console.log(res);
    });
}
function conLoad(e) {
    e.preventDefault();
    $("#resultado").load(url);
}

function conAjax(e) {
    e.preventDefault();
    var o = { nombre: "Luis", apellidos: "yo", edad: 22, nota: 7 };
    $.ajax({
        method: "post",
        url: url,
        success:function(res) {
            console.log(res);
        },
        error:function(err) {
            console.log(err);
        },
        data: JSON.stringify(o),
        dataType: "json",
        headers: {
            "Content-Type":"application/json"
        }
    });
}

$(document).ready(function() {
    $("#lnkAjax").click(conAjax);
    $("#lnkGet").click(conGet);
    $("#lnkGetJson").click(conGetJson);
    $("#lnkPost").click(conPost);
    $("#load").click(conLoad);

});


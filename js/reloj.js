function iniciarHora() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    hr = revisarHora(hr);//Agregar el dígito CERO a los números menores que 10
    min = revisarHora(min);//Agregar el dígito CERO a los números menores que 10
    sec = revisarHora(sec);//Agregar el dígito CERO a los números menores que 10

    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + ap;

    var time = setTimeout(function () {
        iniciarHora()
    }, 500);
}

function revisarHora(i) {
    if (i < 10) {
        i = "0" + i; // Agregamos el digito cero al inicio
    }
    return i;
}

iniciarHora();
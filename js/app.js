window.onload = () => { /* para que el codigo de dentro se ejecute una vez que se cargo completamente en html para evitar errore */
    let botonServir = document.getElementById ("boton-servir");
    let videoTacita = document.getElementById ("tacita");
    let videoTacitaHumeando = document.getElementById("tacita-humeando");
    let estadoTacita ="vacia"

    //apreto el boton de servir
    botonServir.onclick = () => {
    //fijarse si la tacita esta vacia
    if (estadoTacita == "vacia") {
        //reproducir video de tacita sirviendo
        reproducir(videoTacita);

        videoTacita.onended = () => {
         // ocultar video
         ocultar(videoTacita);

        //mostrar video tacita humeando
        mostar(videoTacitaHumeando);

        //reproducir video
        reproducir(videoTacitaHumeando, "loopear");

        //rebobinar video de tacita sirviendo para poder volver usarlo otra vez
        resetear(videoTacita);

        //setear el estado de la tacita a llena
        estadoTacita = "llena";
        }
      }
    }   
    
    let botonTomar = document.getElementById("boton-tomar");
    let videoTacitaTomando = document.getElementById ("tacita-tomando");
        //aprieto el boton de tomar

    botonTomar.onclick = () => {
        //se fija si la tacita tiene liquido
    if(estadoTacita == "lleno");
        //oculta el video de la tacita humeando
        ocultar(videoTacitaHumeando);
        //muestra el de la tacita tomando
        mostrar(videoTacitaTomando);
        //reproduce el de la tacita tomando
        reproducir(videoTacitaTomando);
        //resetea el de la tacita humeando
        resetear(videoTacitaHumeando);

        videoTacitaTomando.onended = () => {
            //mostrar video inicial
            mostrar(videoTacita);
            //ocultar el video de la tacita tomando
            ocultar(videoTacitaTomando);
            //resetear el video de la tacita tomando
            resetear(videoTacitaTomando);
            // resetear el estado de la tacita a vacia
            estadoTacita = "vacia";

        }
    }           
}

function reproducir(video, loopear) {
    if(loopear == "loopear") {
        video.loop =true;
    }
    video.play();
}

function ocultar(video) {
    video.classList.add("display-none");
}

function mostrar(video) {
    video.classList.remove("display-none");
}

function resetear(video) {
    video.pause();
    video.currentTime = 0;
}
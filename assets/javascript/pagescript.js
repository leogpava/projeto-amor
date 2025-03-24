let secdate = document.getElementById("res");
let article = secdate.querySelector("article");
let data = document.getElementById("data");
let sucesso = document.getElementById("sucesso");
let dia = document.getElementById("dia")
let imagem = document.getElementById("innerimg")
let texto = document.getElementById("para")
let video = document.getElementById("video")

function clicar() {
if (data.value == "2023-04-28") {
    sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>` 
    article.style.display = "block";
    secdate.style.display = "block";
    sucesso.style.display = "block";

    dia.innerHTML = `<p>Date 28/04/2023 💗</p>` 
    video.src = "../videos/vinteoito.mp4"
    texto.innerHTML = `<p>Esse foi o dia em que nos vimos pessoalmente pela primeira vez.</p> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum repudiandae repellendus in optio eaque, deleniti rem deserunt voluptates illum accusamus veritatis enim iusto nesciunt quaerat perferendis? Eos iste ab placeat.</p>  <p>Aqui temos o único registro decente desse dia:</p>` 
    imagem.src = ""
} else if (data.value == "2025-03-21") {
    sucesso.innerHTML = `<p>Date encontrado com sucesso! 👇</p>` 

} else if (data.value == "") {
    window.alert("[ERRO] Inserir Data")
} else {
    secdate.style.display = "none";
    sucesso.innerHTML = `<p>Date não encontrado.</p>` 
}
}  
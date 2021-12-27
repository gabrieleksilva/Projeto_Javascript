function aumentaZoom(){
    var paragrafo = document.querySelectorAll("p");
    for (let c = 0; c < paragrafo.length; c++){
        var p = document.querySelector("p");
        const pCS = window.getComputedStyle(p);
        const elemento=document.querySelectorAll("p")[c];
        elemento.style.fontSize = parseInt(getComputedStyle(elemento)["font-size"]) + c + 1 + "px";
    }}
function diminuiZoom(){
    var paragrafo = document.querySelectorAll("p");
    for (let c = 0; c < paragrafo.length; c++){
        var p = document.querySelector("p");
        const pCS = window.getComputedStyle(p);
        const elemento=document.querySelectorAll("p")[c];
        elemento.style.fontSize = parseInt(getComputedStyle(elemento)["font-size"]) + (-c) + -1 + "px";
    }}
function modoNoturno(){
    const body= document.querySelector("body");
    const bodyCS = window.getComputedStyle(body);
    const elemento=document.querySelector("body");
    var botoes = document.querySelectorAll("button");
    if(elemento.style.backgroundColor =="black"){
        elemento.style.backgroundColor="white";
        elemento.style.color = "black";
    }else{
        elemento.style.backgroundColor="black";
        elemento.style.color = "white";
    }}
window.onload = function() {
    var botoes = document.querySelectorAll("button");
    for (let i = 0; i < botoes.length; i++) {
        botoes[0].addEventListener("click", aumentaZoom);
        botoes[1].addEventListener("click", diminuiZoom);
        botoes[2].addEventListener("click", modoNoturno);
    }}
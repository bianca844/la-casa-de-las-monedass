//Lista de moedas preferidas
//Pegando valores
var moedasElement = document.querySelector('#moedas-preferidas ul');
var inputElement = document.querySelector('#moedas-preferidas input');
var buttonElement = document.querySelector('#moedas-preferidas button');
/*Pegando valores que possam estar no localStorage ou criando um array vazio para obtenção de novos valores
e fazendo uma conversão para array novamente
*/
var moedas = JSON.parse(localStorage.getItem('list_moedas')) || [];

//função para renderizar os valores informados pelo usuário
function renderMoedas(){
    moedasElement.innerHTML = '';
    for (moeda of moedas){
        var moedaElement = document.createElement('li');
        var moedaText = document.createTextNode(moeda);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('remover');
        
        linkElement.appendChild(linkText);
        
        var pos = moedas.indexOf(moeda);
        linkElement.setAttribute('onclick', 'deleteMoeda('+pos+')');

        moedaElement.appendChild(moedaText);
        moedaElement.appendChild(linkElement);

        moedasElement.appendChild(moedaElement)
    }
}
renderMoedas();
//Função para adiocionar o valor informado pelo usuário 
function addMoeda(){
    var moedaText = inputElement.value;

    moedas.push(moedaText);
    inputElement.value = '';
    renderMoedas();
    saveStorage();
}
//Executando a ação de adiocionar com o "click"
buttonElement.onclick = addMoeda;
//Evento para adicionar usando a tecla "enter"
inputElement.addEventListener("keydown", (evt) => {
    if(evt.key == "Enter") {
        evt.preventDefault();
        addMoeda();
    }
});
//Função para deletar algum valor desejado pelo usuário
function deleteMoeda(pos){
    moedas.splice(pos, 1);
    renderMoedas();
    saveStorage();
}
//Função para armazenar novos valores no localStorage e fazendo a conversão para um string
function saveStorage(){
    localStorage.setItem('list_moedas', JSON.stringify(moedas));
}
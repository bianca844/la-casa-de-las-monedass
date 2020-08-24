//variáveis e constantes para armazenar valores
const nomeMoeda = 'Real Brasileiro';
var moeda = document.querySelector("#moedas");
var moedapadrao = document.querySelector("#moeda-padrao");
//Constantes de evento e valor informado pelo usuário
const barra = document.querySelector("#barra");
const clicke = document.querySelector("#click");
//Função para acessar os dados da API e informar na tela jogando para o "html"
function fetchData() {
    fetch(`https://economia.awesomeapi.com.br/json/${moeda.value}`)
    .then(resposta=>{
        return resposta.json();
    })
    .then(dados => {
        var conversao = barra.value/dados[0].ask;
        var name = dados[0].name;
        document.querySelector('#result').innerHTML = '';
            let adiocionar = `    
            <thead>
            <tr>
                <th id="lista">Primeira moeda</th>
                <th id="lista">Segunda moeda</th>
                <th id="lista">Valor que vai ser convertido</th>
                <th id="lista">Resultado da conversão</th>
                
            </tr>
            </thead>   
					<tbody id="tabela-conversao">
						<tr class="moeda" id="conversao">
							<td class="info-moeda">${nomeMoeda}</td>
                            <td class="info-moeda2">${name}</td>
                            <td class="info-valor">${barra.value} ${moedapadrao.value}</td>
							<td class="info-resultado">${conversao.toFixed(2)} ${moeda.value}</td>
                            
						</tr>
                    </tbody>
            `
            ;
            document.querySelector('#result').innerHTML += adiocionar;
            barra.value = "";     
    });
}
//evento para o funcionamento com o uso do "click"
click.addEventListener('click', function(evt) {
    evt.preventDefault();
    fetchData();
});
//evento para o funcionamento com o uso da tecla "Enter" 
barra.addEventListener("keydown", (evt) => {
    if(evt.key == "Enter") {
        evt.preventDefault();
        fetchData();
    }
});

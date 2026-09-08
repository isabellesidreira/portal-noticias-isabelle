export const carregarRodape = async() => {
const rodape = document.getElementById("rodape") as HTMLDListElement;    
// carregar o arquivo rodape.html 
const conteudo = await fetch("rodape.html") 

//    converter o conteúdo para texto 
const html = await conteudo.text(); 

// insererir o html no rodapé

rodape.innerHTML = html;
} ;

carregarRodape();
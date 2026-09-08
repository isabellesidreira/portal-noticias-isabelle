export const carregarMenu = async () => {
    const menu = document.getElementById("menu") as HTMLDivElement;
    const conteudo = await fetch("menu.html") 
const html = await conteudo.text(); 
menu.innerHTML = html;
}

carregarMenu();
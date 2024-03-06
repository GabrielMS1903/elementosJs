const title = document.createElement("h1")
console.log(title)
title.id = "titulo"
title.innerText = "Golfinhos são maravilhosos"
document.body.appendChild(title)

const venda = document.createElement("h2")
venda.id = "vendendo"
console.log(venda)
venda.innerText = "Compre um colar de golfinho!"
document.body.appendChild(venda)

const descri = document.createElement("p")

console.log(descri)
descri.innerText = `Nome: Colar M, Preço: R$: 19,90, Descrição: 
um colar belo que reflete a sua inteligência!`
document.body.appendChild(descri)

const amostra = document.createElement("div")
amostra.id = "imagem"
amostra.innerHTML = `
<img src="https://acdn.mitiendanube.com/stores/001/960/786/products/imagem_2022-09-19_2314300501-182baa048eb66eac3816636402793592-640-0.png" alt="">
   <a href="https://nevascajoias.com.br/produtos/colar-feminino-com-pingente-golfinho-prata-925-legitima/">Veja mais!</a>

`
console.log(amostra)
document.body.appendChild(amostra)
# ✨ Gerador de Senhas Seguras

## 💡 Sobre o Projeto
Este projeto foi desenvolvido como parte de uma aula prática de JavaScript, onde ensinamos conceitos fundamentais como manipulação do DOM, eventos, arrays e geração de valores aleatórios. 

O gerador permite ao usuário criar senhas seguras com opções personalizadas, incluindo:
- Letras maiúsculas
- Números
- Símbolos
- Ajuste do comprimento da senha

O projeto foi implementado com **HTML, CSS e JavaScript puro** e pode ser publicado facilmente na **Vercel**.

---

## 🔧 Requisitos para Executar o Projeto
Antes de rodar o projeto, certifique-se de ter os seguintes requisitos:

### 🛠️ Ferramentas Necessárias:
- Navegador atualizado (Google Chrome, Firefox, Edge, etc.)
- Editor de código (VS Code, Sublime Text, etc.)
- Git (para versionamento e deploy na Vercel)
- Conta no GitHub (para armazenar o código)
- Conta na Vercel (para deploy)

### 🌐 Tecnologias Utilizadas:
- **HTML** (estrutura da página)
- **CSS** (estilização da interface)
- **JavaScript** (lógica do gerador de senhas)
- **Git/GitHub** (controle de versão e deploy)
- **Vercel** (hospedagem gratuita)

---

## 📁 Estrutura do Projeto
```
/gerador-senhas
  ├── index.html  # Estrutura principal
  ├── style.css   # Estilização da interface
  ├── script.js   # Lógica de geração de senha
  ├── README.md   # Documentação do projeto
```

---

## ✅ Explicação dos Conceitos Utilizados

### 📌 Variáveis
Em JavaScript, utilizamos **variáveis** para armazenar valores. No nosso projeto, usamos `const` para valores fixos e `let` para valores dinâmicos.

```js
const caracteresMinusculos = "abcdefghijklmnopqrstuvwxyz";
let senhaGerada = "";
```

### 📌 Arrays
Arrays são listas de valores. No projeto, usamos arrays para armazenar os tipos de caracteres disponíveis para a senha.

```js
const caracteresEspeciais = ["!", "@", "#", "$", "%", "&", "*"];
```

### 📌 Manipulação do DOM
O **DOM (Document Object Model)** é usado para manipular elementos HTML via JavaScript.

```js
const botaoGerar = document.getElementById("generateBtn");
botaoGerar.addEventListener("click", gerarSenha);
```

### 📌 Funções
Criamos uma **função** para gerar uma senha aleatória baseada nas opções selecionadas pelo usuário.

```js
function gerarSenha() {
    let senha = "";
    for (let i = 0; i < comprimentoSenha; i++) {
        let caractereAleatorio = listaCaracteres[Math.floor(Math.random() * listaCaracteres.length)];
        senha += caractereAleatorio;
    }
    document.getElementById("passwordDisplay").value = senha;
}
```

---

## ✅ Passo a Passo para Ensinar o Gerador de Senhas

### 1️⃣ Apresentação do Projeto (10 min)
- Mostre o que será construído (exemplo funcionando).
- Explique a importância de senhas seguras e como o sistema irá gerar senhas aleatórias.
- Pergunte se os alunos já usaram geradores de senhas antes e onde são utilizados (ex: LastPass, 1Password).

### 2️⃣ Criando a Estrutura HTML (15 min)
- Ensinar como criar a estrutura básica do HTML.
- Explicar os elementos essenciais (`input`, `button`, `label`, `div`).
- Mostrar como conectar um arquivo CSS e JavaScript ao HTML.

### 3️⃣ Estilizando a Interface com CSS (15 min)
- Explicar como estilizar a página com CSS.
- Ensinar como centralizar elementos (`display: flex`, `text-align: center`).
- Demonstrar a estilização de botões e inputs.

### 4️⃣ Criando a Lógica em JavaScript (30 min)
- Ensinar como capturar elementos do DOM (`document.getElementById`).
- Explicar como criar eventos (`addEventListener`).
- Demonstrar como gerar números e caracteres aleatórios (`Math.random`).
- Ensinar como construir strings dinamicamente e salvar no `localStorage`.

---

✅ Explicação do Código

📌 Estrutura HTML
```html
<!DOCTYPE html>
<html lang="pt">

<!DOCTYPE html> → Define que o documento usa HTML5.

<html lang="pt"> → Informa que o idioma da página é português.

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Senhas</title>
    <link rel="stylesheet" href="style.css">
</head>

<meta charset="UTF-8"> → Permite o uso de caracteres especiais como "ç" e "ã".

<meta name="viewport" content="width=device-width, initial-scale=1.0"> → Garante que o site se adapte a dispositivos móveis.

<title>Gerador de Senhas</title> → Define o título exibido na aba do navegador.

<link rel="stylesheet" href="style.css"> → Conecta o arquivo CSS para estilização.

<body>
    <div class="container">

<body> → Onde o conteúdo visível da página é colocado.

<div class="container"> → Uma divisão principal para organizar os elementos.

<h1>Gerador de Senhas</h1>

<h1> → Define o título principal do site.

<input type="text" id="passwordDisplay" readonly placeholder="Clique para gerar uma senha">

<input type="text"> → Campo de texto onde a senha gerada será exibida.

id="passwordDisplay" → Permite que o JavaScript acesse esse campo.

readonly → Impede que o usuário edite o valor da senha.

placeholder="Clique para gerar uma senha" → Mensagem padrão antes da senha ser gerada.

<button id="copyBtn">Copiar</button>

<button> → Botão para copiar a senha gerada.

<script src="script.js"></script>
</body>
</html>

<script src="script.js"> → Importa o arquivo JavaScript que adiciona interatividade ao projeto.
```
```js
📌 Lógica em JavaScript

document.addEventListener("DOMContentLoaded", () => {

Garante que o código seja executado somente após o carregamento do HTML.

const passwordDisplay = document.getElementById("passwordDisplay");
const lengthInput = document.getElementById("length");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

Essas variáveis armazenam os elementos do HTML para facilitar a manipulação.

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

Define diferentes tipos de caracteres para a senha.

function generatePassword() {
    let length = parseInt(lengthInput.value);
    let characters = lowercaseChars;
    let password = "";

Captura o tamanho da senha escolhido pelo usuário.

Inicializa a variável de caracteres disponíveis e a senha vazia.

if (includeUppercase.checked) characters += uppercaseChars;
if (includeNumbers.checked) characters += numberChars;
if (includeSymbols.checked) characters += symbolChars;

Adiciona caracteres à lista se o usuário tiver selecionado essas opções.

for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
}

Gera a senha aleatória, escolhendo caracteres aleatórios da lista.

passwordDisplay.value = password;

Exibe a senha gerada no campo de texto.

localStorage.setItem("lastGeneratedPassword", password);

Armazena a última senha gerada no navegador.
```


## 🔗 Como Publicar na Vercel
1. Faça login na [Vercel](https://vercel.com/).
2. Clique em **New Project** e conecte seu repositório do GitHub.
3. Selecione o repositório e clique em **Deploy**.
4. Após a finalização, sua aplicação estará online!

---

## 🏆 Conclusão
Agora você tem um **Gerador de Senhas Seguras** funcional! 
Se quiser aprimorar, você pode:
- Adicionar um indicador de força da senha.
- Criar um histórico de senhas geradas.
- Melhorar a responsividade no mobile.

Se gostou do projeto, deixe uma estrela ⭐ no repositório!

**Feito com ❤️ por Arimatéia Júnior** 🚀


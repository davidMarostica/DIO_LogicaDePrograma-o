# DIO_LogicaDePrograma-o

Classificador de Nível de Herói

# 🛡️ Classificador de Nível de Herói

Este projeto em Node.js permite calcular o nível de um herói com base em dois critérios:

- Pontos de experiência (XP)
- Saldo de vitórias em batalhas

Ideal para jogos, sistemas de ranking ou aprendizado de lógica condicional em JavaScript.

---

## 🚀 Funcionalidades

- **Classificação por XP**: Define o nível do herói com base na quantidade de pontos de experiência.
- **Classificação por vitórias**: Calcula o saldo de vitórias e atribui um nível correspondente.
- **Testes automatizados com diferentes valores** para validar a lógica.
- **Entrada interativa opcional** via `readline-sync`.

---

## 🧠 Lógica de Classificação

### Por XP

| Faixa de XP       | Nível        |
|-------------------|--------------|
| 0 - 1000          | Ferro        |
| 1001 - 2000       | Bronze       |
| 2001 - 5000       | Prata        |
| 5001 - 6000       | Ouro         |
| 6001 - 7000       | Platina      |
| 7001 - 8000       | Ascendente   |
| 8001 - 10000      | Imortal      |
| Acima de 10000    | Radiante     |

### Por Vitórias

| Vitórias          | Nível        |
|-------------------|--------------|
| 0 - 10            | Ferro        |
| 11 - 20           | Bronze       |
| 21 - 50           | Prata        |
| 51 - 80           | Ouro         |
| 81 - 90           | Diamante     |
| 91 - 100          | Lendário     |
| Acima de 100      | Imortal      |

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/classificador-heroi.git
cd classificador-heroi
npm install readline-sync
node index.js

## ✍️ Exemplo de Uso
const nivel = calculaNivelHeroi(8500);
console.log(nivel); // Imortal

const resultado = calcularNivel(85, 20);
console.log(resultado); // Saldo 65 → Diamante

## 📁 Estrutura do Projeto

├── index.js          # Código principal
├── README.md         # Documentação do projeto
└── package.json      # Dependências e metadados

## 🤝 Contribuições

Se quiser, posso te ajudar a criar o `package.json` também para deixar o projeto redondinho. Quer que eu gere esse arquivo para você?

 autor: david aparecido da silva

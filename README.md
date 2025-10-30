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
 autor: david aparecido da silva

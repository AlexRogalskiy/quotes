# _Styled quotes_

<div align="center">
<p>Create your styled quotes dynamically</p>

![type definitions](https://img.shields.io/npm/types/typescript?style=flat-square)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/quotes/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/quotes)](https://img.shields.io/github/issues/alexrogalskiy/quotes)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/quotes)](https://img.shields.io/github/forks/alexrogalskiy/quotes)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/quotes)](https://img.shields.io/github/stars/alexrogalskiy/quotes)

</div>

## _Table of contents_

<!--ts-->
<!--te-->

## _Description_

Quotes is a serverless dynamically function that generates styled quote images based on SVG (Scalable Vector Graphics).
For the tech stack, Quotes using Typescript and serverless function from Vercel as this project had been deployed on Vercel stack.

## _How to use_

It's simple, you can copy paste this markdown content, like this one:

```
![Styled Quotes](https://styled-quotes.vercel.app/api?backgroundColor=%23FFFFFF&opacity=0.3&colorPattern=%23FFE0E9&fontColor=%230A83DC)
```

There are several options you can use from the list:

|  Options         | Description                            |   Type            | Example       | Query Params                   | 
| ---------------- | -------------------------------------- | ----------------- | ------------- | ------------------------------ |
| Background Color | Background color for the quote image   | Hex color code    | %23ffffff     | ```?backgroundColor=[value]``` |
| Opacity Pattern  | Background opacity of the pattern      | Float number      | 0 - 1         | ```?opacity=[value]```         |
| Color Pattern    | Color pattern for the signage          | Hex color code    | %231abc9c     | ```?colorPattern=[value]```    |
| Font Color       | Font color for the quote text          | Hex color code    | %23000000     | ```?fontColor=[value]```       |
| Pattern          | Pattern for the background             | String constant   | plus          | ```?pattern=[value]```         |

Pattern in Quotes are provided by [Hero Pattern](https://github.com/lowmess/hero-patterns) package which is developed by [Lowmess](https://github.com/lowmess/): 

| Name              | Value             | 
| ----------------- | ----------------- |
| Plus              | plus              |
| Topography        | topography        |
| Texture           | texture           |
| Hideout           | hideout           |
| FallingTriangles  | falllingTriangles |
| I Like Food       | iLikeFood         |
| Four point stars  | fourPointStars    |
| Brick wall        | brickWall         |
| Wiggle            | wiggle            |
| Bubbles           | bubbles           |
| Floating Cogs     | floatingCogs      |
| Leaf              | leaf              |
| Rain              | rain              |
| Polkadots         | polkadots         |
| Tic Tac Toe       | ticTacToe         |

## _Example_

This is example of using _**Styled Quotes**_:

```
![Styled Quotes](https://styled-quotes.vercel.app/api?backgroundColor=%23FFFFFF&opacity=0.3&colorPattern=%23FFE0E9&fontColor=%230A83DC)
```

Result:

![Styled Quotes](https://styled-quotes.vercel.app/api?backgroundColor=%23FFFFFF&opacity=0.3&colorPattern=%23FFE0E9&fontColor=%230A83DC)

## _Contribution_

Want to make this project better? You can contribute this project, I am very open if there are contributions to this project.

---

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

Powered by Typescript and Vercel. Code licensed under GPL-3.0 license.

<div align="center">
<h1>Quotes</h1>

<p>Get your styled quote dynamically 😎</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/cards/main/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/quotes)](https://img.shields.io/github/issues/alexrogalskiy/quotes)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/quotes)](https://img.shields.io/github/forks/alexrogalskiy/quotes)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/quotes)](https://img.shields.io/github/stars/alexrogalskiy/quotes)

</div>

# Description
A few months ago, Github launched a new feature call Magic Readme which is that file readme will be appear in your github profile and you can set your skills, portfolio, etc in that file readme.

Quotes is a serverless dynamically quote name based on SVG (Scalable Vector Graphics) which is you can make your own quote name and set in your magic readme. For the tech stack, Quotes using Typescript and serverless function from Vercel and also this project had been deployed on Vercel.

# How to use this?
It's simple, you can copy paste this markdown content, like this one:

```
![quote](https://quoteivo.alexrogalskiy.vercel.app/api?name=[name]&description=[description]&image=[image_url])
```
There are several options you can use, and the options is:

|  Options  | Description |   Type     | Example | Query Params | 
|---------- | ---------- | ------- | ----------- | ------------ |
| Background Color | Background color for the quote name | Hex color code | %23ffffff | ```?backgroundColor=[value]``` |
| Icon Color | Colorize the icons in quote name | Hex color code | %23e64a19 | ```?iconColor=[value]``` |
| Font Color | Font color for the quote name | Hex color code | %23000000 | ```?fontColor=[value]``` |
| Site | If you have a site, you can fill this one | String | https://alexrogalskiy.tech | ```?site=[value]``` |
| Pattern | You can use a pattern for the background. You can see the list below | String | plus | ```?pattern=[value]``` |
| Color Pattern | Fill the color pattern | Hex color code | %231abc9c | ```?colorPattern=[value]``` |
| Opacity Pattern | Opacity of the pattern background | Float | 0 - 1 | ```?opacity=[value]``` |
| Instagram | Your Instagram username | String | <account> | ```?instagram=[value]``` |
| linkedin | Your Linkedin username | String | <account> | ```?linkedin=[value]``` |
| Github | Your Github username | String | <account> | ```?github=[value]``` |
| Twitter | Your Twitter username | String | <account> | ```?twitter=[value]``` |

> NB: Remove the square bracket

Pattern in Quotes, i'm used the [Hero Pattern](https://github.com/lowmess/hero-patterns) package which is developed by [Lowmess](https://github.com/lowmess/), and here the list: 

| Pattern | Value | 
| -------- | ---- |
| Plus | plus |
| Topography | topography |
| Texture | texture |
| Hideout | hideout |
| FallingTriangles | falllingTriangles |
| I Like Food | iLikeFood |
| Four point stars | fourPointStars |
| Brick wall | brickWall |
| Wiggle | wiggle |
| Bubbles | bubbles |
| Floating Cogs | floatingCogs |
| Leaf | leaf |
| Rain | rain |
| Polkadots | polkadots |
| Tic Tac Toe | ticTacToe |

# Example
This is example of using *Quotes*:

Markdown content: 

```
![quote](https://quoteivo.alexrogalskiy.vercel.app/api?name=Alexander%20Rogalskiy&description=Active%20Researcher&image=https://avatars3.githubusercontent.com/u/3901898&backgroundColor=%23FFFFFF&github=alexrogalskiy&pattern=bubbles&opacity=0.4&colorPattern=%23FFE0E9&fontColor=%230A83DC)
```

Result:

![quote](https://quoteivo.alexrogalskiy.vercel.app/api?name=Alexander%20Rogalskiy&description=Active%20Researcher&image=https://avatars3.githubusercontent.com/u/3901898&backgroundColor=%23FFFFFF&github=alexrogalskiy&pattern=bubbles&opacity=0.4&colorPattern=%23FFE0E9&fontColor=%230A83DC)

# Contribution
Want to make this project better? You can contribute this project, I am very open if there are contributions to this project.

---
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

Powered by Typescript and vercel. Code licensed under MIT License.

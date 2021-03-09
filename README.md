# _Styled quotes_

> Generate SVG [styled quotes](https://en.wikipedia.org/wiki/Quote)

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/quotes)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/quotes)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/quotes?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/quotes)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/quotes)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/quotes)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/quotes)
![GitHub](https://img.shields.io/github/license/AlexRogalskiy/quotes)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/quotes)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/quotes/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/quotes)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/quotes)
[![Tokei](https://tokei.rs/b1/github/AlexRogalskiy/quotes?category=lines)](https://github.com/XAMPPRocky/tokei)
![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/AlexRogalskiy/quotes)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![DOI](https://zenodo.org/badge/334777292.svg)](https://zenodo.org/badge/latestdoi/334777292)
[![dependencies Status](https://status.david-dm.org/gh/AlexRogalskiy/quotes.svg)](https://david-dm.org/AlexRogalskiy/quotes)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/quotes/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/quotes)](https://img.shields.io/github/issues/alexrogalskiy/quotes)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/quotes)](https://img.shields.io/github/forks/alexrogalskiy/quotes)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/quotes)](https://img.shields.io/github/stars/alexrogalskiy/quotes)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![Maintainability](https://api.codeclimate.com/v1/badges/ed7702f8cf28917829fa/maintainability)](https://codeclimate.com/github/AlexRogalskiy/quotes/maintainability)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/AlexRogalskiy/quotes.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/quotes/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/AlexRogalskiy/quotes.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/quotes/context:javascript)

[![Renovatebot](https://badgen.net/badge/renovate/enabled/green?cache=300)](https://renovatebot.com/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/quotes)
[![Hits-of-Code](https://hitsofcode.com/github/AlexRogalskiy/quotes)](https://hitsofcode.com/github/AlexRogalskiy/quotes/view)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][tags]
[![GitHub Super-Linter](https://github.com/AlexRogalskiy/quotes/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

## _Table of contents_

<!--ts-->
   * [<em>Styled quotes</em>](#styled-quotes)
      * [<em>Table of contents</em>](#table-of-contents)
      * [<em>Description</em>](#description)
      * [<em>How to use</em>](#how-to-use)
      * [<em>Example</em>](#example)
      * [<em>Visitor stats</em>](#visitor-stats)
      * [<em>Licensing</em>](#licensing)
      * [<em>Authors</em>](#authors)
      * [<em>Versioning</em>](#versioning)
      * [<em>Contribution</em>](#contribution)
      * [<em>Acknowledgement</em>](#acknowledgement)
      * [<em>Forks</em>](#forks)
      * [<em>Development Support</em>](#development-support)
<!--te-->

## _Description_

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/quotes" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/quotes" alt="Project updated status" />
    </a>
</p>

_**Styled Quotes**_ is a serverless function that generates dynamically styled quote images based on SVG (Scalable Vector Graphics).
For the tech stack, _**Styled Quotes**_ using Typescript and serverless function from Vercel stack.

## _How to use_

It's simple, you can copy paste this markdown content, like this one:

```
![Styled Quotes](https://styled-quotes.vercel.app/api?backgroundColor=[value]&opacity=[value]&colorPattern=[value]&fontColor=[value]&pattern=[pattern]&category=[value]&width=[width]&height=[height]&keywords=[keywords])
```

There are several options you can use from the list:

|  **Options**           | **Description**                        |   **Type**                     | **Example**   | **Query Params**               | 
| ---------------------- | -------------------------------------- | ------------------------------ | ------------- | ------------------------------ |
| **[Background Color]** | Background color for the quote image   | <code>Hex color code</code>    | %23ffffff     | ```?backgroundColor=[value]``` |
| **[Opacity Pattern]**  | Background opacity of the pattern      | <code>Float number</code>      | 0 - 1         | ```&opacity=[value]```         |
| **[Color Pattern]**    | Color pattern for the signage          | <code>Hex color code</code>    | %231abc9c     | ```&colorPattern=[value]```    |
| **[Font Color]**       | Font color for the quote text          | <code>Hex color code</code>    | %23000000     | ```&fontColor=[value]```       |
| **[Pattern]**          | Pattern for the background             | <code>String constant</code>   | plus          | ```&pattern=[value]```         |
| **[Category]**         | Quote category                         | <code>String constant</code>   | programming   | ```&category=[value]```        |
| **[Width]**            | Quote image width                      | <code>String</code>            | 100%          | ```&width=[value]```           |
| **[Height]**           | Quote image height                     | <code>String</code>            | 100%          | ```&height=[value]```          |
| **[Keywords]**         | Quote keywords                         | <code>String/String[]</code>   | love          | ```&keywords=[value]```        |

Here is a list of categories supported by Quotes API:

| **Name**                          | **Value**                     | 
| --------------------------------- | ----------------------------- |
| **General**                       | general                       |
| **Life**                          | life                          |
| **Love**                          | love                          |
| **Success**                       | success                       |
| **Motivation**                    | motivation                    |
| **Fun**                           | fun                           |
| **Movie**                         | movie                         |
| **Programming**                   | programming                   |
| **Entrepreneurship**              | entrepreneurship              |
| **Popular**                       | popular                       |
| **Humor**                         | humor                         |
| **Philosophy**                    | philosophy                    |
| **God**                           | god                           |
| **Inspire**                       | inspire                       |
| **Truth**                         | truth                         |
| **Wisdom**                        | wisdom                        |
| **Poetry**                        | poetry                        |
| **Romance**                       | romance                       |
| **Death**                         | death                         |
| **Happiness**                     | happiness                     |
| **Faith**                         | faith                         |
| **Hope**                          | hope                          |
| **Writing**                       | writing                       |
| **Religion**                      | religion                      |
| **Relationships**                 | relationships                 |
| **Spirituality**                  | spirituality                  |
| **Time**                          | time                          |
| **Knowledge**                     | knowledge                     |
| **Science**                       | science                       |
| **Books**                         | books                         |
| **Health**                        | health                        |
| **Gratitude**                     | gratitude                     |
| **Courage**                       | courage                       |
| **Responsibility**                | responsibility                |
| **Anger**                         | anger                         |
| **Stress**                        | stress                        |
| **Sadness**                       | sadness                       |

Patterns in Quotes are provided by [Hero Pattern](https://github.com/lowmess/hero-patterns) package which is developed by [Lowmess](https://github.com/lowmess/): 

| **Name**                          | **Value**                     | 
| --------------------------------- | ----------------------------- |
| **Jigsaw**                        | jigsaw                        |
| **Overcast**                      | overcast                      |
| **Formal Invitation**             | formalInvitation              |
| **Topography**                    | topography                    |
| **Texture**                       | texture                       |
| **Jupiter**                       | jupiter                       |
| **Architect**                     | architect                     |
| **Cutout**                        | cutout                        |
| **Hideout**                       | hideout                       |
| **Graph Paper**                   | graphPaper                    |
| **Yyy**                           | yyy                           |
| **Squares**                       | squares                       |
| **Falling Triangles**             | fallingTriangles              |
| **Piano Man**                     | pianoMan                      |
| **Pie Factory**                   | pieFactory                    |
| **Dominos**                       | dominos                       |
| **Hexagons**                      | hexagons                      |
| **Charlie Brown**                 | charlieBrown                  |
| **Autumn**                        | autumn                        |
| **Temple**                        | temple                        |
| **Stamp Collection**              | stampCollection               |
| **Death Star**                    | deathStar                     |
| **Church on Sunday**              | churchOnSunday                |
| **I Like Food**                   | iLikeFood                     |
| **Overlapping Hexagons**          | overlappingHexagons           |
| **Four Point Stars**              | fourPointStars                |
| **Bamboo**                        | bamboo                        |
| **Bathroom Floor**                | bathroomFloor                 |
| **CorkScrew**                     | corkScrew                     | 
| **Happy Intersection**            | happyIntersection             |
| **Kiwi**                          | kiwi                          |
| **Lisbon**                        | lisbon                        |
| **Random Shapes**                 | randomShapes                  |
| **Steel Beams**                   | steelBeams                    |
| **Tiny Checkers**                 | tinyCheckers                  |
| **X Equals**                      | xEquals                       |
| **Anchors Away**                  | anchorsAway                   |
| **Bevel Circle**                  | bevelCircle                   |
| **Brick Wall**                    | brickWall                     |
| **Fancy Rectangles**              | fancyRectangles               |
| **Heavy Rain**                    | heavyRain                     |
| **Overlapping Circles**           | overlappingCircles            |
| **Plus**                          | plus                          |
| **Rounded Plus Connected**        | roundedPlusConnected          |
| **Volcano Lamp**                  | volcanoLamp                   |
| **Wiggle**                        | wiggle                        |
| **Bubbles**                       | bubbles                       |
| **Cage**                          | cage                          |
| **Connections**                   | connections                   |
| **Current**                       | current                       |
| **Diagonal Stripes**              | diagonalStripes               |
| **Flipped Diamonds**              | flippedDiamonds               |
| **Floating Cogs**                 | floatingCogs                  |
| **Glamorous**                     | glamorous                     |
| **Hounds tooth**                  | houndstooth                   |
| **Leaf**                          | leaf                          |
| **Lines In Motion**               | linesInMotion                 |
| **Moroccan**                      | moroccan                      |
| **Morphing Diamonds**             | morphingDiamonds              |
| **Rails**                         | rails                         |
| **Rain**                          | rain                          |
| **Skulls**                        | skulls                        |
| **Squares In Squares**            | squaresInSquares              |
| **Stripes**                       | stripes                       |
| **Tic Tac Toe**                   | ticTacToe                     |
| **ZigZag**                        | zigZag                        |
| **Aztec**                         | aztec                         |
| **BankNote**                      | bankNote                      |
| **Boxes**                         | boxes                         |
| **Circles And Squares**           | circlesAndSquares             |
| **CircuitBoard**                  | circuitBoard                  |
| **Curtain**                       | curtain                       |
| **Diagonal Lines**                | diagonalLines                 |
| **Endless Clouds**                | endlessClouds                 |
| **Eyes**                          | eyes                          |
| **Floor Tile**                    | floorTile                     |
| **Groovy**                        | groovy                        |
| **Intersecting Circles**          | intersectingCircles           |
| **Melt**                          | melt                          |
| **Overlapping Diamonds**          | overlappingDiamonds           |
| **Parkay Floor**                  | parkayFloor                   |
| **Pixel Dots**                    | pixelDots                     |
| **Polka Dots**                    | polkaDots                     |
| **Signal**                        | signal                        |
| **Slanted** Stars                 | slantedStars                  |
| **Wallpaper**                     | wallpaper                     |

## _Example_

This is example of using _**Styled Quotes**_:

```
![Styled Quotes](https://styled-quotes.vercel.app/api?backgroundColor=%23FFFFFF&opacity=0.3&colorPattern=%23FFE0E9&fontColor=%230A83DC)
```

Result:

<div align="center" style="align-content: center">
    <img width="100%" height="300px" style="min-height: 250px" src="https://styled-quotes.vercel.app/api?backgroundColor=%23FFFFFF&opacity=0.3&colorPattern=%23FFE0E9&fontColor=%230A83DC" alt="Quotes" />
</div>

## _Visitor stats_

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fquotes&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/quotes?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/quotes?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/quotes?style=social)

## _Licensing_

_**Styled Quotes**_ is distributed under LGPL version 3 or later, [[License](https://github.com/AlexRogalskiy/quotes/blob/master/LICENSE)].
LGPLv3 is additional permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## _Authors_

_**Styled Quotes**_ is maintained by the following GitHub team-members:

* [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## _Versioning_

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository][tags].

## _Contribution_

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/quotes?size=50&padding=5&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/quotes/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us ([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/quotes)

See also the list of [contributors][contributors] who participated in this project.

## _Acknowledgement_

[![Stargazers repo roster for @AlexRogalskiy/quotes](https://reporoster.com/stars/AlexRogalskiy/quotes)][stars]

## _Forks_

[![Forkers repo roster for @AlexRogalskiy/quotes](https://reporoster.com/forks/AlexRogalskiy/quotes)][forkers]

## _Development Support_

Like _**Styled Quotes**_ ? Consider buying me a coffee :\)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

---

[![forthebadge](https://img.shields.io/badge/made%20with-%20typescript-C1282D.svg?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20vercel-7116FB.svg?logo=vercel&style=for-the-badge)](https://vercel.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart&style=for-the-badge)](https://forthebadge.com/)


  [repo]:           https://github.com/AlexRogalskiy/quotes
  [tags]:           https://github.com/AlexRogalskiy/quotes/tags
  [issues]:         https://github.com/AlexRogalskiy/quotes/issues
  [pulls]:          https://github.com/AlexRogalskiy/quotes/pulls
  [wiki]:           https://github.com/AlexRogalskiy/quotes/wiki
  [stars]:          https://github.com/AlexRogalskiy/quotes/stargazers
  [forkers]:        https://github.com/AlexRogalskiy/quotes/network/members
  [contributors]:   https://github.com/AlexRogalskiy/quotes/graphs/contributors

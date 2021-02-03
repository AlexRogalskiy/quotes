import { HeroPattern } from '../typings/types';
import {
  brickWall,
  bubbles,
  fallingTriangles,
  floatingCogs,
  fourPointStars,
  hideout,
  iLikeFood,
  leaf,
  plus,
  polkaDots,
  rain,
  texture,
  ticTacToe,
  topography,
  wiggle,
} from 'hero-patterns';
import { isBlankString, randomEnum } from "./commons";

interface GetPattern {
  [key: string]: any;
}

const getPattern = (pattern: any, opacity: string, colorPattern: string): string => {
  const patternMapping: GetPattern = {
    [HeroPattern.brickWall]: brickWall,
    [HeroPattern.bubbles]: bubbles,
    [HeroPattern.fallingTriangles]: fallingTriangles,
    [HeroPattern.floatingCogs]: floatingCogs,
    [HeroPattern.fourPointStars]: fourPointStars,
    [HeroPattern.hideout]: hideout,
    [HeroPattern.iLikeFood]: iLikeFood,
    [HeroPattern.leaf]: leaf,
    [HeroPattern.plus]: plus,
    [HeroPattern.polkaDots]: polkaDots,
    [HeroPattern.rain]: rain,
    [HeroPattern.texture]: texture,
    [HeroPattern.ticTacToe]: ticTacToe,
    [HeroPattern.topography]: topography,
    [HeroPattern.wiggle]: wiggle,
  };

  const patternFunc = isBlankString(pattern) ? patternMapping[randomEnum(HeroPattern)] : patternMapping[pattern];
  const fillOpacity = [colorPattern, opacity];

  return patternFunc.apply(null, fillOpacity);
};

export default getPattern;

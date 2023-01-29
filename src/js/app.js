import Board from './board';
import Goblin from './goblin';
import Game from './game';

const board = new Board();
const char = new Goblin();
const game = new Game(board, char);

game.init();
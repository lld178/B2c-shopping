import Snake from "./snake";
import Food from "./food";
import Panel from "./panel";
class GameControl {
  snake: Snake
  food: Food
  panel: Panel
  direaction: string
  isLive = true
  constructor() {
    this.snake = new Snake()
    this.panel = new Panel()
    this.food = new Food()
    this.init()
  }
  init() {
    document.addEventListener('keyup', this.keyupHandler.bind(this))
    this.run()
  }
  keyupHandler(event: KeyboardEvent) {
    this.direaction = event.key

  }
  run() {
    let x = this.snake.x
    let y = this.snake.y
    let timeId
    switch (this.direaction) {
      case 'ArrowUp':
        y = y - 10
        break;
      case 'ArrowRight':
        x = x + 10
        break;
      case 'ArrowDown':
        y = y + 10
        break;
      case 'ArrowLeft':
        x = x - 10
        break;
      default:
        break;
    }
    this.checkEat(x, y)
    try {
      this.snake.x = x
      this.snake.y = y
    } catch (error) {
      alert(error.message)
      this.isLive = false
    }

    if (this.isLive) {
      if (timeId) {
        clearTimeout(timeId)
      }
      timeId = setTimeout(this.run.bind(this), 300 - (this.panel.level - 1) * 10)
    }
  }

  checkEat(x, y) {
    if (x === this.food.x && y === this.food.y) {
      this.food.change()
      this.panel.addScore()
      this.snake.addBody()
    }
  }
}
export default GameControl
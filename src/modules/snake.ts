class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  element: HTMLElement
  constructor() {
    this.head = document.querySelector('.snake>div')
    this.element = document.querySelector('.snake')
    this.bodies = this.element.getElementsByTagName('div');
  }
  get x() {
    return this.head.offsetLeft
  }
  get y() {
    return this.head.offsetTop
  }
  set x(value: number) {
    if (this.x === value) {
      return
    }
    if (value < 0 || value > 290) {
      throw new Error('damn!')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.x) {
        value = this.x - 10
      } else {
        value = this.x + 10

      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'

  }
  set y(value: number) {
    if (this.y === value) {
      return
    }
    if (value < 0 || value > 290) {
      throw new Error('damn!')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.y) {
        value = this.y - 10
      } else {
        value = this.y + 10

      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'


  }
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
  moveBody() {
    for (let index = this.bodies.length - 1; index > 0; index--) {
      let x = (this.bodies[index - 1] as HTMLElement).offsetLeft
      let y = (this.bodies[index - 1] as HTMLElement).offsetTop;
      (this.bodies[index] as HTMLElement).style.left = x + 'px';
      (this.bodies[index] as HTMLElement).style.top = y + 'px'
    }
  }
}
export default Snake
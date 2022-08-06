interface NumberFrameProps {
  from?: number;
  to: number;
  duration?: number;
  element?: HTMLElement;
}

class NumberFrame {
  #startTime?: number;
  #from: number;
  #to: number;
  #duration: number;
  #element?: HTMLElement;
  get #frameNumber(): number {
    return (this.#to - this.#from) / this.#duration;
  }
  /** func in animationFrame */
  #step = (time: number) => {
    if (!this.#startTime) this.#startTime = time;
    // clac passTime
    let passTime = Math.round(time - this.#startTime);
    if (passTime > this.#duration) passTime = this.#duration;

    this.number = Math.round(this.#from + passTime * this.#frameNumber);
    if (this.#element) this.#element.innerText = this.number.toString();

    if (passTime >= this.#duration) return;
    else requestAnimationFrame(this.#step);
  };

  constructor({ from = 0, to, duration = 1000, element }: NumberFrameProps) {
    this.#from = from;
    this.#to = to;
    this.#duration = duration;
    this.#element = element;
    this.number = from;
  }

  /** number of frames */
  public number: number;
  /** begin animation */
  public start() {
    requestAnimationFrame(this.#step);
  }
}

export { NumberFrame };
export default NumberFrame;

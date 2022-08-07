interface NumberFrameProps {
  from?: number;
  to: number;
  duration?: number;
  element?: HTMLElement;
  cb?: Function;
}

class NumberFrame {
  private startTime?: number;
  private from: number;
  private to: number;
  private duration: number;
  private element?: HTMLElement;
  private cb?: Function;
  private get frameNumber(): number {
    return (this.to - this.from) / this.duration;
  }
  /** func in animationFrame */
  private step = (time: number) => {
    if (!this.startTime) this.startTime = time;
    // clac passTime
    let passTime = Math.round(time - this.startTime);
    if (passTime > this.duration) passTime = this.duration;

    this.number = Math.round(this.from + passTime * this.frameNumber);
    if (this.element) this.element.innerText = this.number.toString();
    if (this.cb) this.cb();

    if (passTime >= this.duration) return;
    else requestAnimationFrame(this.step);
  };

  constructor({ from = 0, to, duration = 1000, element, cb }: NumberFrameProps) {
    this.from = from;
    this.to = to;
    this.duration = duration;
    this.element = element;
    this.number = from;
  }

  /** number of frames */
  public number: number;
  /** begin animation */
  public start(cb?: Function) {
    this.cb = cb && cb.bind(this);
    requestAnimationFrame(this.step);
  }
}

export { NumberFrame };
export default NumberFrame;

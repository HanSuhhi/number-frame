## TODO: README


### Getting Started

```html
<div id='app' />
```
```javascript
import NumberFrame from 'number-frame';

const numberFrame = new NumberFrame({
  from: -200,
  to: 2022,
  duration: 4044,
  element: document.getElementById("app"),
});

setTimeout(() => {
    numberFrame.start();
}, 1000);
```

**When you open the page some changes have happened.**

![Demo Gif](/public/demo.gif)


### API

* **NumberFrame**

> class

|  key   | type | description |
|  ----  | ---- | ----  |
| start  | Function | Start changing numbers as expected |
| value  | Number | Number in a frame. <br />If you use a progressive framework like vue, you can  get the number  of each moment to render your component |

* **NumberFrameProps**

> constructor


|  key   | type | description |
|  ----  | ---- | ----  |
| from  | ? Number(default: 0) | Starting number |
| to  | Number | End number |
| duration | ? Number(default: 1000) | Total time(ms) |
| element | ? HTMLElement | If you have an html element, numbers will autoplay in this element|

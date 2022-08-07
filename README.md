## TODO: README


### Getting Started

* **Basic Use**

```html
<div id='app' />
```
```javascript
import NumberFrame from '@hansuhhi-don/number-frame';

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

![Demo Gif](https://raw.githubusercontent.com/HanSuhhi/number-frame/main/public/demo.gif)

* **Vue**

```vue
import { NumberFrame } from "@hansuhhi-don/number-frame";
import { defineComponent, onMounted, ref } from "vue";

const nf = new NumberFrame({
  from: 0,
  to: 2022,
  duration: 2000,
});

export default defineComponent({
  setup: () => {
    const num = ref(0);

    onMounted(() => {
      nf.start(() => (num.value = nf.number));
    });
    return () => {
      return <p>{num.value}</p>;
    };
  },
});
```

**When you open the page some changes have happened.**

![Vue Demo Gif](https://raw.githubusercontent.com/HanSuhhi/number-frame/main/public/vue.gif)

### API

* **NumberFrame**

> class

|  key   | type | description |
|  ----  | ---- | ----  |
| start  | (cb: Function) => void | Start changing numbers as expected <br /> cb will be called every time |
| value  | Number | Number in a frame. |

* **NumberFrameProps**

> constructor

|  key   | type | description |
|  ----  | ---- | ----  |
| from  | ? Number(default: 0) | Starting number |
| to  | Number | End number |
| duration | ? Number(default: 1000) | Total time(ms) |
| element | ? HTMLElement | If you have an html element, numbers will autoplay in this element|

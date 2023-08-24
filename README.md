# wxz-utils

> 在个人项目中为了一部分代码避免重复造轮子使用， 于是花点时间打造一款属于个人的前端底层库; 对了底层库使用`TS`在合适不过了;
>
> 当然可以再不同的设备环境中使用，可以在`node`中使用，也可以在`VUE`中使用，同时还可以在`浏览器`中使用

## 使用方式

### 1️⃣：浏览器使用，引入 js-cdn

默认引入： `https://cdn.jsdelivr.net/npm/wxz-utils/dist/index.js`
支持版本引入：`https://cdn.jsdelivr.net/npm/wxz-utils/dist/index.js@1.0.0`

浏览器`<script>`中这样使用：

```JS
// 打印全局变量，如果有值说明引入成功;
console.log(wxzUtils)
console.log('加', wxzUtils.add(1, 2));
console.log('减', wxzUtils.subtract(1, 2));
console.log('乘', wxzUtils.multi(1, 2));
console.log('除', wxzUtils.division(1, 2));
```

### 2️⃣：node 中使用

使用命令: `npm i wxz-utils`

```js
import { add } from "wxz-utils";
console.log(add(1, 2));

const wxzUtils = require("wxz-utils");
console.log(wxzUtils.add(1, 2));
```

### 3️⃣：VUE 中使用

```js
import { add } from "wxz-utils";
console.log(add(1, 2));
```

---

**文档还在不断进行完善**

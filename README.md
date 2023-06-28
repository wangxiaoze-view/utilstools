# web-utils

> 一款前端基础库，避免重复造轮子，支出node,js嵌入；目前总体进度还在不断更新中；
> 

## 使用方式

### 1️⃣：浏览器使用，引入js-cdn

默认引入： `https://cdn.jsdelivr.net/npm/web-utils-js`
支持版本引入：`https://cdn.jsdelivr.net/npm/web-utils-js@0.0.2`

浏览器`<script>`中这样使用：
```JS
// 打印全局变量，如果有值说明引入成功; 
console.log(webUtils)
console.log('加', webUtils.add(1, 2));
console.log('减', webUtils.subtract(1, 2));
console.log('乘', webUtils.multi(1, 2));
console.log('除', webUtils.division(1, 2));
console.log('最大值', webUtils.max(1, 2));
console.log('最小值', webUtils.min(1, 2));
console.log('和', webUtils.sum(1, 2, 3));
```

### node中使用
使用命令: `npm i web-utils-js`

```js
import {add} from 'web-utils-js'
console.log(add(1, 2))

const webUtils = require('web-utils-js')
console.log(webUtils.add(1, 2))
```

## 进度

> - [x] 代表已完成 
> - [ ] 未完成

- [x] math算法，俩数加减乘法，最大值，最小值，数组之和；
- [ ] 数组
- [ ] 字符串
- [ ] 常用正则
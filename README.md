# web-utils (待更新) 版本重大更新中....下面文档属于旧文档, 还未发布

> 一款前端基础库，避免重复造轮子，支出 node,js 嵌入；目前总体进度还在不断更新中；

## 使用方式

### 1️⃣：浏览器使用，引入 js-cdn

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

### 2️⃣：node 中使用

使用命令: `npm i web-utils-js`

```js
import { add } from "web-utils-js";
console.log(add(1, 2));

const webUtils = require("web-utils-js");
console.log(webUtils.add(1, 2));
```

## 进度

> - [x] 代表已完成
> - [ ] 未完成

- [x] math 算法
  - [x] 俩数加减乘法，
  - [x] 最大值，最小值
  - [x] 数组之和；
- [x] 字符串
  - [x] 去除空格 `trim(str)`
  - [x] 切割为数组 `split(str, char, limit)` 切割的字符串，切割的字符，切割的数量
- [x] 数组
  - [x] 数组循环 `each(arr, callback)`
  - [x] 数组、对象过滤， `filter(data, callback)` 返回的是数组格式
  - [x] 数组对象查询 `find(data, callback)` 返回的是查询到的值
- [ ] 时间转换
- [ ] 常用函数，如防抖节流。克隆等
- [x] 常用正则
  - [x] 手机号校验，最宽松模式`isPhoneLoosest(value)`
  - [x] 手机号校验，宽松模式 `isPhoneLoose(value)`
  - [x] 手机号校验，严谨模式 `isPhone(value)`
  - [x] 电子邮箱 `isEmail(value)`
  - [x] 是否为座机`isLandline(value)`
  - [x] 是否为身份证; 身份证号, 支持 1/2 代(15 位/18 位数字)`isCard(value)`
  - [x] 是否为中文、汉字`isChinese(value)`
  - [x] 是否是纯数字 `isNumber(value)`
  - [x] html 标签(宽松匹配)`isHtmlTag(value)`
  - [x] 数字和字母组成 `isCharAndNum(value)`
  - [x] 小写英文字母 `isLoChar(value)`
  - [x] 大写英文字母 `isUpChar(value)`
  - [x] 正整数，不包含 0 `isPositiveInt(value)`
  - [x] 负整数，不包含 0 `isNegativeInt(value)`
  - [x] 浮点数 `isFloor(value)`

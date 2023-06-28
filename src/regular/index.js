// 手机号校验，最宽松模式
export const isPhoneLoosest = (value) => /^(?:(?:\+|00)86)?1\d{10}$/.test(value);
// 手机号校验，宽松模式
export const isPhoneLoose = (value) => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value);
// 手机号校验，严谨模式
export const isPhone = (value) => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(value);
// 电子邮箱
export const isEmail = (value) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
// 是否为座机
export const isLandline = (value) => /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(value);
// 是否为身份证; 身份证号, 支持1/2代(15位/18位数字)
export const isCard = (value) => /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(value);
// 是否为中文、汉字
export const isChinese = (value) => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(value);
// 是否是纯数字
export const isNumber = (value) => /^\d+$/.test(value);
// html标签(宽松匹配)
export const isHtmlTag = (value) => /<(\w+)[^>]*>(.*?<\/\1>)?/.test(value);
// 数字和字母组成
export const  isCharAndNum = (value) => /^[A-Za-z0-9]+$/.test(value);

// 小写英文字母
export const isLoChar = (value) => /^[a-zA-Z]+$/.test(value);
// 大写英文字母
export const isUpChar = (value) => /^[A-Z]+$/.test(value);

// 正整数，不包含0
export const isPositiveInt = (value) => /^\+?[1-9]\d*$/.test(value);
// 负整数，不包含0
export const isNegativeInt = (value) => /^-[1-9]\d*$/.test(value);
// 浮点数
export const isFloor = (value) => /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/.test(value);



# flexible-demo
移动端淘宝flexible的demo

## Build Setup

``` bash
# 运行前请先安装所需依赖
npm install

# 运行以下命令启动服务器 localhost:8080
npm run webpack
```

---
## 效果图(iphone6下的展示图)
![image](https://github.com/sihai00/flexible-demo/blob/master/iphone6.png)
---

## 主要方法调用
> 由于flexible是通过页面的缩放比实现，解决了高清图模糊和1px边框的问题，但同时带来副作用是字体和布局的缩放

### 解决字体缩放（sass语法）
```css
@mixin fontDpr($font-size) {
    font-size: $font-size;
    [data-dpr="2"] & {
        font-size: $font-size * 2;
    }
    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
}
```
### 解决布局缩放（sass语法）
```css
// 设计图宽度
$baseFontSize: 75px;

@function px2rem($px) {
  	@return $px / $baseFontSize * 1rem;
}
```

链接：[淘宝lib-flexible](https://github.com/amfe/lib-flexible)
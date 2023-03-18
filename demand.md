## 主题
1. 点击按钮
2. 调用5次API
3. 每个api返回一张图片和一个id `{id, img}`
4. 渲染页面:按照id排序在页面显示结果

## 备注
记录开始时间
上传地址: [腾讯文档](https://docs.qq.com/ ),设置全部可见
记录结束时间
把链接跟时间发送到boss


## 项目运行
> 环境： nodejs > 18.15.0

### 启动后台服务
> 后台使用 node配合nestjs
1. 进入 img-serve
2. 启动项目 `npm run start:dev`

### 启动前端服务
> 前端使用vue3 + pinia + css\html
1. 进入img-front
2. 启动项目 `npm run dev`
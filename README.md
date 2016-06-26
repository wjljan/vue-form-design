# vue form design demo

> vue表单设计demo

## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```
##说明
```bash
分为四个区域：
1.组件标签区域(label)、2.组件预览区域(preview)、3.组件编辑区域(edit)、4.按钮区域(button)

主要目录结构：
src
 |- components
 |     |- label
 |     |    |- labelWrapper.vue //标签区域容器
 |     |    |- widget
 |     |         |- titleLabel.vue //标题label组件
 |     |         |- voteLabel.vue //投票label组件
 |     |         |- ...
 |     |- preview
 |     |    |- previewWrapper.vue //预览区域容器
 |     |    |- widget
 |     |         |- titlePreview.vue //标题preview组件
 |     |         |- votePreview.vue //投票preview组件
 |     |         |- ...
 |     |- edit
 |     |    |- editWrapper.vue //编辑区域容器
 |     |    |- widget
 |     |         |- titlEedit.vue //标题edit组件
 |     |         |- voteEdit.vue //投票edit组件
 |     |         |- ...
 |     |- button
 |          |- buttonWrapper.vue //按钮区域容器
 |          |- widget
 |               |- resetButton.vue //重置button
 |               |- submitBUtton.vue //提交button
 |
 |- store
       |- index.ks //挂载vuex
       |- actions.js //触发mutation
       |- mutations.js //修改state
       |- state.js //存储state
```
##交互逻辑
```bash
范德萨范德萨

```

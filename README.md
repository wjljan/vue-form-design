# vue表单设计demo

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
##交互
```bash
1.在标签区域拖放某组件标签至预览区域，创建该标签类型应的预览组件、编辑组件以及组件数据。
2.在预览区域点击某预览组件，在编辑区域会显示该预览组件对应的数据项。
3.在编辑区域修改某组件数据，其对应的预览组件将会同步更新。
3.在按钮区域点击重置按钮，将重置设计表单；点击提交按钮，将生成组件清单数据。

```
##逻辑
```bash
vuex单向数据流：
state -> view -> event -> action -> mutation -> state -> view

说明：
拖动标签至预览区域、删除预览区域某预览组件、编辑组件数据项等事件都会触发对应action，
action会触发对应的mutation来修改组件数据的state，
state的变化会反应到预览区域和编辑区域的视图上。
```
##toDo
```bash
 1.预览组件之间可拖动排序
 2.组件表单项细化
```

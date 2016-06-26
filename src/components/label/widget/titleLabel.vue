<template>
	<div class="label-item-wrapper" draggable="true" @dragstart="dragStart">
		<img class="label-icon" alt="节标题" src="">
		<span class="label-text">节标题</span>
	</div>
</template>

<script>
	export default {
		name : "title_label",
		methods : {
			dragStart (e){
				//组件对象的id和数据对象的id相关联
				var id = Date.now();
				var dt = e.dataTransfer;
				dt.setData("id", id);
				dt.setData("type", 'title');
				dt.setData("widgetEditData", JSON.stringify({
					id : id,
					type : "title",
					title : "节标题",
					value : ""
				}));
			}
		}
	}
</script>

<style lang="stylus">
	.label-item-wrapper
		display: inline-block
		margin: 5px
		padding: 5px
		width: 90px
		border-radius: 3px
		border: 1px dashed #b4b4b4
		font-size: 0
		.label-icon,
		.label-text
			vertical-align: middle
			display: inline-block
			font-size: 12px
		.label-text
			margin-left: 10px
	.label-item-wrapper:hover
		cursor: move
		color: #5990CF
		border: 1px solid #5990cf
		box-shadow: 2px 2px 6px rgba(0, 0, 0, .13), -2px -2px 6px rgba(0, 0, 0, .13)
</style>

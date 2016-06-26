<template>
	<div class="label-item-wrapper" draggable="true" @dragstart="dragStart">
		<img class="label-icon" alt="投票" src="">
		<span class="label-text">投票</span>
	</div>
</template>

<script>
	export default {
		name : "vote_label",
		methods : {
			dragStart (e){
				//组件对象的id和数据对象的id相关联
				var id = Date.now();
				var dt = e.dataTransfer;
				dt.setData("id", id);
				dt.setData("type", 'vote');
				dt.setData("widgetEditData", JSON.stringify({
					id : id,
					type : "vote",
					title : "投票",
					items : [
						{name : "第1项"},
						{name : "第2项"},
						{name : "第3项"}
					]
				}));
			}
		}
	}
</script>

<style lang="stylus">

</style>

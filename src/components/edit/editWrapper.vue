<template>
	<div class="edit-wrapper">
		<component :is="currentView" v-bind:id="currentEditWidgetId"></component>
	</div>
</template>

<script>
	import titleEdit from './widget/titleEdit.vue' //标题编辑
	import voteEdit from './widget/voteEdit.vue' //标题编辑

	export default {
		name : "edit_wrapper",
		components : {
			titleEdit,
			voteEdit
		},
		computed : {
			currentView (){
				for (let value of this.widgetPreview){
					if (value.id == this.currentEditWidgetId) return value.type + "Edit";
				}
			}
		},
		vuex : {
		 	getters : {
		 		currentEditWidgetId : (state) => state.currentEditWidgetId,
		 		widgetPreview : (state) => state.widgetPreview
            }
        }
	}
</script>

<style lang="stylus">
	.edit-wrapper
		float: left
		margin-top: 10px
		margin-left: 10px
		padding: 10px
		width: 250px
		height: 300px
		overflowY: scroll
		overflowX: hidden
		border: 1px solid #e5e5e5
</style>
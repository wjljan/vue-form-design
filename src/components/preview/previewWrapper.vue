<template>
	<div class="preview-wrapper" @dragover="dragOver" @drop="dropIn">
		<template v-for="value in widgetMap">
			<template v-if="value.type == 'title'">
				<title-preview v-bind:id="value.id"></title-preview>
			</template>
			<template v-if="value.type == 'vote'">
				<vote-preview v-bind:id="value.id"></vote-preview>
			</template>
		</template>
	</div>
</template>

<script>
	import {addTitlePreview, addWidgetEditData} from '../../store/actions'

	import titlePreview from './widget/titlePreview.vue' //标题预览
	import votePreview from './widget/votePreview.vue' //投票预览

	export default {
		name : "preview_wrapper",
		components : {
			titlePreview,
			votePreview
		},
		computed : {
			widgetMap (){
				return this.widgetPreview;
			}
		},
		methods : {
			dragOver (e){
				e.preventDefault();
			},
			dropIn (e){
				e.preventDefault();
				//创建拖进的编辑组件和对应数据对象
				var dt = e.dataTransfer;
				var id = parseInt(dt.getData("id"));
				var type = dt.getData("type");
				var widgetEditData = JSON.parse(dt.getData("widgetEditData"));
				this.addTitlePreview(id, type);
				this.addWidgetEditData(widgetEditData);
			}
		},
		vuex : {
		 	getters : {
		 		widgetPreview : (state) => state.widgetPreview
            },
            actions : {
            	addTitlePreview,
            	addWidgetEditData
            }
        }
	}
</script>

<style lang="stylus">
	.preview-wrapper 
		float: left
		margin-top: 10px
		padding: 10px
		width: 400px
		height: 300px
		overflow-y: scroll
		overflow-x: hidden
		border: 1px solid #e5e5e5
		background-color: #f5f5f
</style>
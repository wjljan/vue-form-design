<template>
	<div class="preview-item-wrapper" @click="showEdit">
		<span class="preview-item-del" title="删除该组件">
			<div v-on:click="delMe">x</div>
		</span>
		<label class="preview-item-label">{{title}}</label>
		<div class="preview-item-input-wrapper">
			<input class="title-preview-input" readonly="readOnly" v-model="value"/>
		</div>
	</div>
</template>

<script>
	import {deleteWidgetPreview, changeWidgetEdit} from '../../../store/actions'

	export default {
		name : "title_preview",
		props : {
			id : Number
		},
		computed : {
			title (){
				for (let value of this.widgetEditDataMap){
					if (value.id == this.id) return value.title
				}
			},
			value (){
				for (let value of this.widgetEditDataMap){
					if (value.id == this.id) return value.value
				}
			}
		},
		methods : {
			delMe (){
				this.deleteWidgetPreview(this.id);
			},
			showEdit (){
				console.info("id: " + this.id);
				this.changeWidgetEdit(this.id);
			}
		},
		vuex : {
			getters : {
		 		widgetEditDataMap : (state) => state.widgetEditDataMap
            },
            actions : {
                deleteWidgetPreview,
                changeWidgetEdit
            }
        }
	}
</script>

<style lang="stylus">
	.preview-item-wrapper
		position: relative
		margin: 0 0 15px 0
		padding: 12px 40px
		border: 1px dashed #5990CF
		background-color: #EBF6FF
		.preview-item-del
			position: absolute
			top: -10px
			right: 10px
			width: 16px
			height: 16px
			line-height: 16px
			text-align: center
			color: #E74C3C
			border: 1px solid #E74C3C
			border-radius: 100%
			background-color: white
			:hover 
				cursor: pointer
				color: white
				border-radius: 100%
				background-color: #E74C3C
		.preview-item-label
			display: block
			margin-bottom: 10px
			font-size: 12px
			font-weight: bold
		.title-preview-input
			padding: 0 5px
			width: 100%
			min-height: 36px
			line-height: 24px
			border: 1px solid #bdbdbd
			border-radius: 3px
</style>

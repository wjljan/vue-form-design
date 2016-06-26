<template>
	<div class="preview-item-wrapper" @click="showEdit">
		<span class="preview-item-del" title="删除该组件">
			<div v-on:click="delMe">x</div>
		</span>
		<label class="preview-item-label">{{title}}</label>
		<div class="preview-item-input-wrapper">
			<input v-for="item in items" class="vote-preview-input" readonly="readOnly" v-model="item.name"/>
		</div>
	</div>
</template>

<script>
	import {deleteWidgetPreview, changeWidgetEdit} from '../../../store/actions'

	export default {
		name : "vote_preview",
		props : {
			id : Number
		},
		computed : {
			title (){
				for (let value of this.widgetEditDataMap){
					if (value.id == this.id) return value.title
				}
			},
			items (){
				for (let value of this.widgetEditDataMap){
					if (value.id == this.id) return value.items
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
		.vote-preview-input
			margin: 5px 0
			padding: 0 5px
			width: 100%
			min-height: 24px
			line-height: 16px
			border: 1px solid #bdbdbd
			border-radius: 3px
</style>
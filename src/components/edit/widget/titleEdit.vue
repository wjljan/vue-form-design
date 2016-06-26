<template>
	<div class="edit-item-wrapper">
		<label class="edit-item-label">标题</label>
		<div class="edit-item-input-wrapper">
			<input class="edit-item-input" v-model="title" @input="inputTitle"/>
		</div>
		<label class="edit-item-label">默认值</label>
		<div class="edit-item-input-wrapper">
			<input class="edit-item-input" v-model="value" @input="inputValue"/>
		</div>
	</div>
</template>

<script>
	import {changeWidgetEditData} from '../../../store/actions'

	export default {
		name : "title_edit",
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
			inputTitle (e){
				this.changeWidgetEditData(this.id, 'title', e.target.value);
			},
			inputValue (e){
				this.changeWidgetEditData(this.id, 'value', e.target.value);
			}
		},
		vuex : {
		 	getters : {
		 		widgetEditDataMap : (state) => state.widgetEditDataMap
            },
            actions : {
            	changeWidgetEditData
            }
        }
	}
</script>

<style lang="stylus">
	.edit-item-wrapper
		broder: 1px solid #e5e5e5
		.edit-item-label
			display: block
			margin-top: 10px
			margin-bottom: 10px
			font-size: 12px
			font-weight: bold
		.edit-item-input
			display: block
			padding: 5px 3px
			border: 1px solid #bdbdbd
</style>
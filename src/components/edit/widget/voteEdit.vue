<template>
	<div class="edit-item-wrapper">
		<label class="edit-item-label">投票标题</label>
		<div class="edit-item-input-wrapper">
			<input class="edit-item-input" v-model="title" @input="inputTitle"/>
		</div>
		<label class="edit-item-label">投票项</label><span class="vote-edit-item-add" title="添加投票项" @click="addItem">+</span>
		<div class="vote-edit-item-wrapper">
			<div v-for="(index, item) in items" class="vote-edit-item">
				<input class="vote-edit-item-input" data-index={{index}} v-model="names[index]" @input="inputItemName"/>
				<div class="vote-edit-item-del" title="删除该项" data-index={{index}} @click="deleteItem">-</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {changeWidgetEditData, delteVoteEditItem} from '../../../store/actions'

	export default {
		name : "vote_edit",
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
			},
			names (){
				var arr = [];
				for (let value of this.items){
					arr.push(value.name);
				}
				return arr;
			}
		},
		methods : {
			inputTitle (e){
				this.changeWidgetEditData(this.id, 'title', e.target.value);
			},
			addItem (e){
				this.changeWidgetEditData(this.id, 'items', {
					name : "新增项"
				});
			},
			inputItemName (e){
				var index = e.target.attributes["data-index"].value;
				console.info(index);
				this.changeWidgetEditData(this.id, 'items', e.target.value, index, 'name');
			},
			deleteItem (e){
				var index = e.target.attributes["data-index"].value;
				console.info(index);
				this.delteVoteEditItem(this.id, index);
			}
		},
		vuex : {
		 	getters : {
		 		widgetEditDataMap : (state) => state.widgetEditDataMap
            },
            actions : {
            	changeWidgetEditData,
            	delteVoteEditItem
            }
        }
	}
</script>

<style lang="stylus">
	.vote-edit-item-input
		margin: 5px 0
		padding: 5px 3px
		border: 1px solid #bdbdbd
	.vote-edit-item-del,
	.vote-edit-item-add
		display: inline-block
		padding: 0 2px 4px
		border: 1px solid #e5e5e5
	.vote-edit-item-del:hover,
	.vote-edit-item-add:hover
		cursor: pointer
		border: 1px solid #5990cf
		box-shadow: 2px 2px 6px rgba(0, 0, 0, .13), -2px -2px 6px rgba(0, 0, 0, .13)
</style>
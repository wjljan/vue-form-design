<template>
	<div id="app">
		<label-wrapper></label-wrapper>
		<preview-wrapper></preview-wrapper>
		<edit-wrapper></edit-wrapper>
		<button-wrapper></button-wrapper>
	</div>
</template>

<script>
	import store from './store/index'

	import labelWrapper from './components/label/labelWrapper.vue'
	import previewWrapper from './components/preview/previewWrapper.vue'
	import editWrapper from './components/edit/editWrapper.vue'
	import buttonWrapper from './components/button/buttonWrapper.vue'

	export default {
		store,
		components : {
			labelWrapper,
			previewWrapper,
			editWrapper,
			buttonWrapper
		}
	}
</script>

<style lang="stylus">
	::-webkit-scrollbar 
		width: 8px
		height: 8px
	::-webkit-scrollbar-track 
		-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3)
		border: none;background-color: #FFFFFF
	::-webkit-scrollbar-thumb 
		-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,.3)
		border: none;background-color: #F5F5F5
	html 
		margin: 0
		padding: 0
		height: 100%
		font-family: '微软雅黑'
	body 
		margin: 5px
	input
		outline: none
</style>

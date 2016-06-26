<template>
	<div class="button-wrapper">
		<reset-button></reset-button>
		<submit-button></submit-button>
	</div>
</template>

<script>
	import resetButton from './widget/resetButton.vue'
	import submitButton from './widget/submitButton.vue'

	export default {
		components : {
			resetButton,
			submitButton
		}
	}
</script>

<style lang="stylus">
	.button-wrapper 
		clear: both
		margin-top: 340px
		padding: 10px
		width: 680px
		border: 1px solid #e5e5e5
		.resetButton,
		.submitButton
			display: inline-block
			padding: 8px 12px
			font-size: 12px
			border: 1px solid #e5e5e5
		.resetButton:hover,
		.submitButton:hover
			cursor: pointer
			border: 1px solid #5990cf
			box-shadow: 2px 2px 6px rgba(0, 0, 0, .13), -2px -2px 6px rgba(0, 0, 0, .13)
</style>
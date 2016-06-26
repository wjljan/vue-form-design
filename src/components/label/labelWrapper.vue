<template>
	<div class="label-wrapper">
		<title-label></title-label>
		<vote-label></vote-label>
	</div>
</template>

<script>
	import titleLabel from './widget/titleLabel.vue' //标题标签
	import voteLabel from './widget/voteLabel.vue' //投票标签

	export default {
		name : "label_wrapper",
		components : {
			titleLabel,
			voteLabel
		}
	}
</script>

<style lang="stylus">
	.label-wrapper 
		padding: 10px;
		width: 680px;
		height: 50px;
		border: 1px solid #e5e5e5;
</style>

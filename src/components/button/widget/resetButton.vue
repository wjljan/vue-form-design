<template>
	<div class="resetButton" title="重置设计表单" @click="reset">重置</div>
</template>

<script>
	import {resetAll} from '../../../store/actions'

	export default {
		methods : {
			reset (){
				var result = confirm("确定要重置设计表单？");
				result && this.resetAll();
			}
		},
		vuex : {
			actions : {
				resetAll
			}
		}
	}
</script>

<style lang="stylus">

</style>
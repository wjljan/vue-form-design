<template>
	<div class="submitButton" title="提交表单创建活动" @click="submit">提交</div>
</template>

<script>
	export default {
		methods : {
			submit (){
				var jsonStr = JSON.stringify(this.widgetEditDataMap);
				console.info(jsonStr);
				alert(jsonStr);
			}
		},
		vuex : {
			getters : {
		 		widgetEditDataMap : (state) => state.widgetEditDataMap
            }
		}
	}
</script>

<style lang="stylus">

</style>
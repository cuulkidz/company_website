<script>
import Vue from 'vue';

Vue.component('whistles', {
	data: function() {
		return {
			desc: "List of messages to slide on homepage"
		};
	},
	template: '<div id="slideTextArea"><div id="firstSlide"><p>hello</p></div><div id="secondSlide"><p>hello</p></div><div id="thirdSlide"><p>hello</p></div></div>',
})
</script>
<style lang="scss" scope>
	#slideTextArea {

		#firstSlide{
			font-size: 50px;
		}
		#secondSlide{
			font-size: 50px;
		}
		#thirdSlide {
			font-size: 50px;
		}
	}
</style>
<script>
import Vue from 'vue';

Vue.component('logo', {
	data: function() {
		return {
			alt: "Cuulkids Logo"
		};
	},
	template: '<div class="logo"></div>',
})
</script>

<style type="scss" scope>
	.logo {
		position: fixed;
		height: 45px;
		width: 45px;
		left: 0;
		top: 0;
		background-color: #13CE66;
		border-radius: 25px;
		margin-top: 25px;
		margin-left: 25px;
	}
</style>
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
		background-color: #FF4949;
		border-radius: 25px;
		padding: 10px;
		margin: 10px;
		/*margin-top: 50px;
		margin-left: 50px;*/
	}
	@media screen and (max-height: 450px) {
		.logo {
			height: 70px;
			width: 70px;
			margin-top: 35px;
			margin-left: 35px;
		}
    }
</style>
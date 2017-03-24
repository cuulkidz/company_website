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

<style type="css" scope>
	.logo {
		position: fixed;
		height: 45px;
		width: 45px;
		left: 0;
		top: 0;
		background-color: #FF4949;
		border-radius: 25px;
		margin-top: 50px;
		margin-left: 50px;
	}
	@media only screen and (max-width: 480px)and only screen and (max-width: 480px), only screen and (max-device-width: 480px), only screen and (max-device-width: 640px) {
	  .logo {
	  	width: 80px;
	  	height: 80px;
	  	border-radius: 40px;
	  	margin-top: 60px;
	  }
	}
</style>
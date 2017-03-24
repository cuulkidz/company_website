<script>
import Vue from 'vue'
import Button from 'element-ui'
Vue.use(Button)

Vue.component('playground', {
	data: function() {
		return {
			link: "#/services",
			message: "Explore Our Work"
		};
	},
	methods: {
		goToServices: function() {
			alert("Go now")
		}
	},
	template: '<el-button v-on:click="goToServices" class="play-btn">{{ message }}</el-button>',
	
})
</script>

<style type="css" scope>
	.play-btn {
		position: fixed;
		left: 0;
		bottom: 0;
		margin-bottom: 100px;
		margin-left: 100px;
		padding: 15px;
		font-family: 'Lato',sans-serif;
		border: 2px solid #13CE66;
		border-radius: 4px;
		color: #13CE66;
		font-size: 20px;
		&:hover{
			background-color: #13CE66;
			color: #ffffff;
		}
	}
	.play-btn:hover {
		background-color: #13CE66;
		color: #ffffff;
		border-color: #13CE66;
	}
	@media only screen and (max-width: 480px)and only screen and (max-width: 480px), only screen and (max-device-width: 480px), only screen and (max-device-width: 640px) {
	  .play-btn {
	  	font-size: 3.5em;
	  	margin-top: 50px;
	  	margin-left: 70px;
	  	padding: 30px;
	  	border: 4px solid #13CE66;
	  	border-radius: 12px;
	  }
	}
</style>
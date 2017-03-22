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

<style type="scss" scope>
	.play-btn {
		position: fixed;
		left: 0;
		bottom: 0;
		margin-bottom: 100px;
		margin-left: 100px;
		height: 55px;
		font-family: 'Gotham SSm B','Gotham SSm A',Helvetica,Roboto,Arial,sans-serif;
		border: 2px solid #13CE66;
		color: #13CE66;
		font-size: 18px;
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
</style>
<script>
import Vue from 'vue';

Vue.component('navRegion', {
	data: function() {
		return {
			desc: "This is nav region"
		};
	},
	template: '<el-row id="nav-area"><el-col :span="24"><div :span="12"><logo></logo></div><div :span="12"><navigation></navigation></div></el-col></el-row>',
})
</script>

<style type="css" scope>
	#nav-area {
		border-right: solid 12px #cc3341;
		height: 20vh;
	}
	@media only screen and (max-width: 480px)and only screen and (max-width: 480px), only screen and (max-device-width: 480px), only screen and (max-device-width: 640px) {
		#nav-area {
			height: 12vh;
			border-right-width: 18px;
		}
  	}

</style>
	
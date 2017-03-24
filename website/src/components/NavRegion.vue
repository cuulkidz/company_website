<script>
import Vue from 'vue';

Vue.component('navRegion', {
	data: function() {
		return {
			desc: "This is nav region"
		};
	},
	template: '<el-row class="nav-area"><el-col :span="24"><div :span="12"><logo></logo></div><div :span="12"><navigation></navigation></div></el-col></el-row>',
})
</script>

<style type="scss" scope>
	.nav-area {
		height: 15vh;
	}
</style>
	
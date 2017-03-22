<script>
import Vue from 'vue';

Vue.component('navigation', {
	data: function() {
		return {
			links: [
				{ "name": "Home", "link": "#/" },
				{ "name": "About", "link": "#/about" },
				{ "name": "Contact", "link": "#/contact"},
				{ "name": "Services", "link": "#/services"}
			]
		};
	},
	template: '<div id="nav-spot"><div class="nav-link" v-for="link in links"><a :href="link.link">{{ link.name }}</a></div></div>',
})
</script>

<style type="scss">
	#nav-spot {
		float: right;
		margin-top: 20px;
		margin-right: 20px;
	}
</style>
	
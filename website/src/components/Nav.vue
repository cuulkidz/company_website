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
	template: '<div><div class="nav-link" v-for="link in links"><a :href="link.link">{{ link.name }}</a></div></div>',
})
</script>
	
<script>
import Vue from 'vue';

Vue.component('playground', {
	data: function() {
		return {
			name: "Explore our Playground",
			link: "#/services"
		};
	},
	template: '<div><a :href="link">{{ name }}</a></div>',
})
</script>
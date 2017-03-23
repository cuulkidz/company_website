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
	template:	`<div>
					<span v-on:click="openNav" class="nav-control">&#9776;</span>
					<div id="myNav" class="overlay">
						<logo></logo>
				  	  	<a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">&times;</a>
					  	<div class="overlay-content">
					  		<el-row v-for="link in links">
					  			<el-col :span="14" :offset="8">
						    		<a :href="link.link" v-on:click="closeNav">{{ link.name }}</a>
						    		<hr v-if="link.name != 'Services'" class="nav-line">
						    	</el-col>
						    </el-row>
						</div>
					</div>
				</div>`,
	methods: {
		openNav: function() {
			document.getElementById("myNav").style.width = "100%";
		},
		closeNav: function() {
			document.getElementById("myNav").style.width = "0%";
		}
	}
})
</script>

<style type="scss">
.nav-control {
	color: #000;
	font-size: 50px;
	position: absolute;
    top: 20px;
    right: 45px;
}
.cool-heading {
	margin-top: 20px;
	color: #ffffff;
	font-size: 50px;
	font-family: 'Lato';
}
/* The Overlay (background) */
.overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */    
    height: 100%;
    width: 0;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgba(0,224,183,0.95); /* Black fallback color */
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}
.overlay-content {
    position: relative;
    top: 13%; /* 25% from the top */
    width: 80%; /* 100% width */
    text-align: left; /* Centered text/links */
    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}
.overlay a {
    text-decoration: none;
    padding: 15px;
    font-size: 50px;
    font-weight: bolder;
    color: #ffffff;
    text-align: center;
    display: block; /* Display block instead of inline */
    transition: 0.3s; /* Transition effects on hover (color) */
}
.overlay a:hover, .overlay a:focus {
    color: #000;
    transition: 0.8s;
}
.overlay .closebtn {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0px;
    margin-right: 20px;
    font-size: 60px;
    color: #ffffff;
    font-weight: 100;
}
.nav-line {
	color: #333;
	height: 0.1px;
}
hr.nav-line { 
  border-style: solid; 
  border-color: #E5E9F2; 
  border-width: 0.1px 0 0 0; 
} 
hr.nav-line:before { 
  display: block; 
  content: ""; 
  height: 30px; 
  margin-top: -31px; 
  border-style: solid;
  border-color: #E5E9F2;
  border-width: 0 0 0.1px 0; 
}
@media screen and (max-height: 450px) {
    .overlay a {font-size: 40px; font-size: 200;}
    .overlay .closebtn {
        font-size: 40px;
        top: 15px;
        right: 35px;
        font-weight: 100;
    }
}

</style>
	
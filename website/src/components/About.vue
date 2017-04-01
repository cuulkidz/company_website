<template>
  <div>
    <div id="about-intro">
    	<div id="about-intro-text">
	    	<h2>
	    		We want to Help<br>
	    		Everyone Reach the<br>
	    		World
	    	</h2>
	    	<p>So we started a company.</p>
	    </div>
    </div>
    <div id="left-about">
    	
    </div>
    <div id="right-about">
    	
    </div>
    <div id="our-story">
    	<h2>Our Story</h2>
    	We do not really have one. <br>Let's see how things go.
    </div>
  </div>
</template>
<script>

export default {
    data() {
      return {
      	title: "This is About"
      };
  }
}

</script>
<style type="css">

#about-intro {
	width: 100%;
	height: 220px;
}
#about-intro-text {
	text-align: left;
	margin-left: 200px;
	font-family: 'Open Sans', sans-serif;
}
#about-intro h2 {
	font-size: 25px;
}
#about-intro p {
	font-size: 18px;
}
#left-about {
	display: block;
	height: 400px;
	width: 40%;
	margin-left: 200px;
	background-color: #77ABFF;
}
#right-about {
	display: block;
	height: 400px;
	width: 40%;
	float: right;
	margin-top: -250px;
	margin-right: 200px;
	background-color: #9A96FF;
}
#our-story {
	width: 30%;
	text-align: left;
	font-family: 'Open Sans', sans-serif;
	margin-left: 210px;
	margin-top: 100px;
	margin-bottom: 30px;
}
#our-story h2 {
}
#about-content {
	margin: 0 auto;
}

@media only screen and (max-width: 480px)and only screen and (max-width: 480px), only screen and (max-device-width: 480px), only screen and (max-device-width: 640px) {
  p {
    font-size: 4em;
  }
  #left-about {
	height: 400px;
	width: 100%;
	float: none;
	margin-left: 0px;
  }
  #right-about {
	height: 400px;
	width: 100%;
	float: none;
	margin-top: 0px;
	margin-right: 0px;
  }
  #our-story {
	width: 100%;
	text-align: center;
	margin-left: 0px;
	margin-top: 20px;
  }
  #about-intro {
	margin-bottom: 150px;
  }
  #about-intro h2 {
	font-size: 3.5em;
  }
  #about-intro p {
	font-size: 2.5em;
  }
  #our-story {
	font-size: 2em;
  }
}
</style>
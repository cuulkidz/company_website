<template>
	<el-row class="height-85 padding-10">
  		<el-col :span="13" class="service-screen">
  			<div class="service-text">
				<span class="montserrat">{{ service.caption }}</span>
				<span class="">{{ service.info }}</span>
			</div>
  		</el-col>
	</el-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				services: [
					{ "caption": 'Being of service to others makes us happy', "info": ''},
					{ "caption": 'Something', "info": ''}
				],
				service: { caption: 'Being of service to others makes us happy', info: ''},
				title: 'This is services'
			}
		}
	}
</script>

<style type="text/css">
	.home-background {
		/*background-color: lightgrey;*/
	}

	.padding-10 {
		padding: 10vh;
	}

	.height-85 {
		height: 85vh;
	}

	/*.background-grey {
		background-color: lightgrey;
	}*/

	.background-white {
		background-color: white;
	}

	.service-screen {
		height: 100%;
	}

	.service-text {
		text-align: left;
		position: absolute;
		max-width: 666px;
		bottom: 30vh;
	}

	.montserrat {
		font-family: Montserrat;
		font-size: 42px;
	}

	.width-40 {
		display: block;
		width: 65%;
		margin: 0px;
	}
</style>
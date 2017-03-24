<template>
  <div>
    <p>{{ title }}</p>
    <whistles></whistles>
    <playground></playground>
  </div>
</template>

<script>

export default {
    data() {
      return {
      	title: "This is home"
      };
  }
}

</script>
<style type="css" scope>
p {
  font-size: 1.5em;
}
@media only screen and (max-width: 480px)and only screen and (max-width: 480px), only screen and (max-device-width: 480px), only screen and (max-device-width: 640px) {
  p {
    font-size: 4em;
  }
}
</style>
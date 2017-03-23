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
<style type="scss" scope>
p {
  font-size: 20px;
}
@media screen and (max-height: 450px) {
  p {
    font-size: 60px;
  }
}
</style>
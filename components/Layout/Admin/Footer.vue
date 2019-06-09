<template>
    <footer class="main-footer d-flex p-2 px-3 bg-serveme border-top">
      <span class="copyright ml-auto my-auto mr-2 text-white">Copyright © <span id="year">2019</span>
        <a href="!#" rel="nofollow">ServeMe</a>
      </span>
    </footer>
</template>
<script>
export default {
  mounted(){
    document.getElementById('year').innerHTML = new Date().getFullYear();
  }
}
</script>

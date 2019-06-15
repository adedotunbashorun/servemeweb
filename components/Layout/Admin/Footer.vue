<template>
    <footer>
			<div class="container-fluid">
				<p class="copyright">&copy; <span id="year">2019</span> <a href="!#">{{settings.app_name }}</a>. All Rights Reserved.</p>
			</div>
		</footer>
</template>
<script>
export default {
  props: ["settings"],
  mounted(){
    document.getElementById('year').innerHTML = new Date().getFullYear();
  }
}
</script>

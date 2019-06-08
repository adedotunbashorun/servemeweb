<template>
    <div>
        <nuxt />
    </div>
</template>
<script>
export default {
    head () {
        return {
            bodyAttrs: {
                id: ''
            },
            link: [
                { href:"/assets/css/demo1/pages/general/login/login-4.css",rel:"stylesheet",type:"text/css",}
            ],
            script: [
                { src: '/assets/js/demo1/pages/login/login-general.js' },

            ]
        }
    },
    mounted(){
      WebFont.load({
				google: {
					"families": ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700"]
				},
				active: function() {
					sessionStorage.fonts = true;
				}
      })

      var KTAppOptions = {
				"colors": {
					"state": {
						"brand": "#5d78ff",
						"dark": "#282a3c",
						"light": "#ffffff",
						"primary": "#5867dd",
						"success": "#34bfa3",
						"info": "#36a3f7",
						"warning": "#ffb822",
						"danger": "#fd3995"
					},
					"base": {
						"label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
						"shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
					}
				}
			}
    }
}
</script>

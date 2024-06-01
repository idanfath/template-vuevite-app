<script setup>
</script>

<template>
  <div>
    <h1 v-motion-fade>Home View</h1>
    <Message severity="success">Success Message</Message>
    <Button @click="toggleDarkMode()"><i-mdi-account-circle /></Button>
  </div>
  <div style="height: 100vh;"></div>
  <div style="height: 100vh;"></div>
</template>

<script>
  export default {
    name: 'home',
    setup() {
      const route = useRoute();
      const params = route.params;
      const isDarkMode = useStorage('dark-mode', false);
      const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
        document.documentElement.classList.toggle('dark-mode', isDarkMode.value);
      };
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark-mode');
      }
      return {
        params, route, toggleDarkMode
      }
    },
    data() {
      return {
      }
    },
    methods: {
      testing() {

        Swal.fire({
          title: 'Hello Vue3', //or titleText to avoid HTML injection

          position: "top-start",
          padding: "1em",
          width: 600,
          heightAuto: true,
          toast: true,
          animation: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,

          timer: 3000,
          timerProgressBar: true,

          // imageUrl: "https://unsplash.it/400/200",
          // imageWidth: 400,
          // imageHeight: 200,
          // imageAlt: "Custom image",

          backdrop: true,
          backdrop: "rgba(0,0,123,0.4) blur(10px)",

          // ! html is not recommended for security reasons
          // html: `<b>bold text</b>, <a href="#">links</a>, and other HTML tags`,
          icon: 'success',
          footer: '<a href="#" class="no-dec-2">EH ini knp ya</a>',

          reverseButtons: false,
          focusConfirm: true,
          focusDeny: false,
          focusCancel: false,
          showConfirmButton: true,
          showDenyButton: true,
          showCloseButton: true,
          showCancelButton: true,
          denyButtonText: 'Nope',
          confirmButtonText: 'Cool',
          cancelButtonText: 'Cancel',

          // background: "#414141",
          color: "var(--primary)",
          confirmButtonColor: 'var(--confirm)',
          denyButtonColor: 'var(--error)',
          cancelButtonColor: 'var(--grey)',

          // customClass: {
          //   container: '...',
          //   popup: '...',
          //   header: '...',
          //   title: '...',
          //   closeButton: '...',
          //   icon: '...',
          //   image: '...',
          //   htmlContainer: '...',
          //   input: '...',
          //   inputLabel: '...',
          //   validationMessage: '...',
          //   actions: '...',
          //   confirmButton: '...',
          //   denyButton: '...',
          //   cancelButton: '...',
          //   loader: '...',
          //   footer: '....',
          //   timerProgressBar: '....',
          // },

          showClass: {
            popup: `animate__animated animate__fadeIn aniamte__faster`
          },
          hideClass: {
            popup: `animate__animated animate__fadeOut animate__faster`
          }

        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Fym nope?', '', 'info')
            throw new Error('Operation denied')
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', '', 'error')
            throw new Error('Operation cancelled')
          }
        }).then(() => {
          console.log('done')
        })
      },
    }
  }
</script>

<style>
</style>

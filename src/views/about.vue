<script setup>
  const { width, height } = useWindowSize()
  console.log(width.value, height.value)
</script>

<template>
  <div>
    <h1 v-motion-fade>About View</h1>
    <p>{{mf.backend}}</p>
    <i-mdi-account-circle/>
    <form class="container" @submit.prevent="onSubmit">
      <input v-model="regist.name" type="text" placeholder="name">
      <input v-model="regist.email" type="text" placeholder="email">
      <input v-model="regist.password" type="password" placeholder="password">
      <input v-model="regist.confirmpassword" type="password" placeholder="confirmpassword">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'home',
    mounted() {
      this.mf_test()
      console.log(this.mf_scrW)
    },
    data() {
      return {
        v$: useValidate(),
        regist: {
          name: '',
          email: '',
          password: '',
          confirmpassword: ''
        },
      }
    },
    validations() {
      return {
          regist: {
            name: { required },
            email: { required, email },
            password: { required },
            confirmpassword: { sameAs: sameAs(this.regist.password) }
          },
      }
    },
    methods: {
      onSubmit() {
        console.log(this.regist)
        console.log(this.v$)
        this.v$.$validate();
        if (!this.v$.$invalid) {
          Swal.fire({
            title: `hello ${this.regist.name}`,
            text: `email: ${this.regist.email}, password: ${this.regist.password}`,
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Please check your input',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        };
      }
    }
  }
</script>
<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    padding: 20px;
    align-items: center;
  }

  .container>* {
    height: 30px;
    width: 200px;
  }
</style>

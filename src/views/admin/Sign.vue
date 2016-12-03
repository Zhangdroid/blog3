<template>
  <div>
    <input
      v-model="email"
      type="email"
      title="email">
    <input
      v-model="password"
      type="password"
      title="email">
    <button @click="signUp">{{ $t("SIGN_UP") }}</button>
    <button @click="signIn">{{ $t("SIGN_IN") }}</button>
  </div>
</template>

<script>
import AV from 'leancloud-storage'
export default {
  beforeRouteEnter (to, from, next) {
    const currentUser = AV.User.current()
    if (currentUser) {
      next({
        path: '/admin'
      })
    } else {
      next()
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      const user = new AV.User()
      user.setUsername(this.email)
      user.setEmail(this.email)
      user.setPassword(this.password)
      user.signUp().then(user => {
        this.$router.push(this.$route.query.redirect || '/admin')
      }).catch(err => {
        console.log(err)
      })
    },
    signIn () {
      AV.User.logIn(this.email, this.password).then(user => {
        this.$router.push(this.$route.query.redirect || '/admin')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>


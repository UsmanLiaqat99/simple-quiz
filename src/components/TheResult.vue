<template>
  <div class="main">
    <div>
      <div class="user">
        <div class="info">
          <h4>Name:</h4>
          <p>{{ name }}</p>
        </div>
        <div class="info">
          <h4>Email:</h4>
          <p>{{ email }}</p>
        </div>
        <div class="info">
          <h4>Phone#</h4>
          <p>{{ number }}</p>
        </div>

      </div>
    </div>
    <h4>Are you confirm to submit your quiz or check again!</h4>
    <div class="btn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correctAnswers: 2,
      totalAnswers: 10,
    };
  },
  computed: {
    name() {
        return this.$store.getters.name
    },
    email() {
        return this.$store.getters.email
    },
    number() {
        return this.$store.getters.number
    }
  }
};
</script>

<style scoped>
.user {
  padding: 0px 4px;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  max-width: 600px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 50px 40px 50px;
  background-color: white;
  border-radius: 5px;
}

.btn {
  display: flex;
  justify-content: space-between;
}
</style>
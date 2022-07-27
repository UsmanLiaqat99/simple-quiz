<template>
  <div class="main">
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
};
</script>

<style scoped>
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
<template>
  <div v-if="question">
    <div class="mainQuestion">
      <h2 class="questionTitle">
        {{ question.title }}
      </h2>
      <input class="input_label" v-if="question.type == 3" v-model="selectedAnswer" type="text" @change="selectAnswer" />
      <textarea class="input_label" v-if="question.type == 4" v-model="selectedAnswer" type="text" @change="selectAnswer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TextQuestion",
  props: {
    question: {
      type: Object,
      default: () => {
        return {
          id: "1",
          title: "Rolex is a company that specializes in what type of product?",
          options: {
            a: "Bags",
            b: "Watches",
            c: "Shoes",
            d: "Laptops",
            e: "Laptops 123",
          },
          answer: "a",
          explanation: "Explanation",
          type: 3,
        };
      },
    },
  },
  data() {
    return {
      selectedAnswer: "",
    };
  },
  methods: {
    selectAnswer() {
        const answer = {
            question: this.question.id,
            answer: this.selectedAnswer
        }
        console.log(answer)
        this.$emit('selectAnswer', answer)
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 750px) {
  .questionTitle {
    font-size: 18px;
  }

  .input_label {
    padding: 10px;
  }
}
</style>
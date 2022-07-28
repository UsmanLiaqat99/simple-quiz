<template>
  <div class="mainQuestion">
    <h2 class="questionTitle">
      {{ question.title }}
    </h2>
    <label
      class="input_label"
      v-for="(option, i) in Object.keys(question.options)"
      :for="i"
      :key="i"
      :class="[{ input_label_selected: selectedAnswer.includes(option)  }]"
    >
      <input
        :disabled="disable"
        type="checkbox"
        :id="i"
        :value="option"
        @change="selectAnswer"
        v-model="selectedAnswer"
      />
      {{ question.options[option] }}
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    question: {
      type: Object,
      default: null,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedAnswer: [],
    };
  },
  mounted() {
    this.shownAnswer();
  },
  methods: {
    shownAnswer() {
      if (this.question.answeredQuestion) {
        console.log(this.question.answeredQuestion);
        this.selectedAnswer = this.question.answeredQuestion;
      }
    },
    selectAnswer() {
      const answer = {
        question: this.question.id,
        answer: this.selectedAnswer,
      };
      this.$emit("selectAnswer", answer);
    },
  },
};
</script>

<style scoped>
.input_label:hover {
  background-color: #f1f3f4;
}

.input_label_selected {
  background-color: rgba(128, 128, 128, 0.808);
}
</style>
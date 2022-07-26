<template>
  <div v-if="question">
    <div class="mainQuestion">
      <h2 class="questionTitle">
        {{ question.title }}
      </h2>
      <label
        v-for="(option, i) in Object.keys(question.options)"
        :for="i"
        :key="i"
        :class="[
          { input_label: selectedAnswer !== option },
          { input_label_selected: selectedAnswer == option },
        ]"
      >
        <input
          type="checkbox"
          :id="i"
          :value="option"
          @change="selectAnswer"
          v-model="selectedAnswer"
        />
        {{ question.options[option] }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    question: {
      type: Object,
      default: null
    },
  },
  data() {
    return {
      selectedAnswer: [],
    };
  },
  methods: {
    selectAnswer() {
        const answer = {
            question: this.question.id,
            answer: this.selectedAnswer
        }
        this.$emit('selectAnswer', answer)
    },
  },
};
</script>
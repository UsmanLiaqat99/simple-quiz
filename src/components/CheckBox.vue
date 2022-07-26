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
      </label
  <div id="main">
    <div v-if="index < count">
      <h2 class="main_title">Check Box Quiz</h2>
      <div class="mainQuiz">
        <h2 class="sub_title">
          {{ questions[index]["question"] }}
        </h2>
        <label
          v-for="(answer, key) in questions[index]['answers']"
          :for="key"
          :key="key"
        >
          <input
            type="checkbox"
            :id="key"
            :value="answer"
            v-model="selectedChecks"
          />
          {{ answer }}
        </label>

        <div class="btn">
        <it-button type="success" @click="prevQuestion">&lt; Prev</it-button>
        <it-button type="success" @click="nextQuestion">Next &gt;</it-button>
        <it-button type="success" @click="submit">Submit</it-button>
      </div>
      </div>
      <div class="btn" style="display: flex">
        <it-button
          style="margin-left: 350px"
          type="success"
          v-show="selectedChecks"
          @click="nextQuestion"
          >Next &gt;</it-button
        >
        <it-button
          style="margin-left: 350px"
          type="success"
          v-show="selectedAnswer != '' && index == count - 1"
          @click="showResults"
          >Submit</it-button
        >
      </div>
    </div>
    <div v-else class="mainQuiz mainQuiz2">
      <h2>Results</h2>
      <div class="result">
        <p>
          Correct Answers:
          <span style="color: green">{{ correctAnswer }}</span>
        </p>
        <p>
          Wrong Answers:
          <span style="color: red">{{ wrongAnswer }}</span>
        </p>
      </div>
      <div class="playAgain">
        <it-button @click="resetQuiz" type="success">Play again</it-button>
      </div>
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
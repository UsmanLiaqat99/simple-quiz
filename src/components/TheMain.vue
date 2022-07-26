<template>
  <div id="main">
    <div>
<<<<<<< HEAD
      <MultipleChoiceQuestion
        v-if="shownQuestion && (shownQuestion.type == 0 || shownQuestion.type == 2)"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
      <CheckBox v-else-if="shownQuestion && shownQuestion.type == 1"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"/>
      <TextQuestion
        v-else-if="shownQuestion && (shownQuestion.type == 3 || shownQuestion.type == 4)"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
    </div>
    <!-- <div class="btn" style="display: flex">
      <it-button style="margin-left: 350px" type="success" @click="nextQuestion"
        >Next &gt;</it-button
      >
    </div> -->
    <it-button type="success" @click="nextQuestion" v-if="showNextBtn">Next &gt;</it-button>
=======
      <MultipleChoiceQuestion v-if="shownQuestion && (shownQuestion.type == 0 || shownQuestion.type == 2)"
        :question="shownQuestion" @selectAnswer="selectAnswer" />
      <TextQuestion v-else-if="shownQuestion && (shownQuestion.type == 3 || shownQuestion.type == 4)"
        :question="shownQuestion" @selectAnswer="selectAnswer" />
      <div class="btn">
        <it-button type="success" @click="prevQuestion">&lt; Prev</it-button>
        <it-button type="success" @click="nextQuestion">Next &gt;</it-button>
        <!-- <it-button type="success" @click="submit">Submit</it-button> -->
      </div>
    </div>
>>>>>>> origin/usman
  </div>
</template>

<script>
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
import TextQuestion from "./TextQuestion.vue";
import CheckBox from "./CheckBox.vue";
export default {
  data() {
    return {
      index: 0,
      selectedAnswer: "",
      correctAnswer: 0,
      wrongAnswer: 0,
      answeredQuestions: [],
      count: null,
      questions: [
        {
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
          type: 0,
        },
        {
          id: "2",
          title: "Check Box is a company that specializes in what type of product?",
          options: {
            a: "BagTrue",
            b: "Watches",
            c: "Shoes",
            d: "Laptops",
            e: "Laptops 123",
          },
          answer: "a",
          explanation: "Explanation",
          type: 1,
        },
        {
          id: "3",
          title: "Rolex is a company that specializes in what type of product?",
          options: { a: "True", b: "False" },
          answer: "a",
          explanation: "Explanation",
          type: 2,
        },
        {
          id: "4",
          title: "Rolex is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          type: 3,
        },
        {
          id: "5",
          title: "Rolex is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          type: 4,
        },
        {
          id: "6",
          title: "Rolex is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          type: 5,
        },
      ],
      shownQuestion: null,
      showNextBtn: false
    };
  },
  mounted() {
    this.count = this.questions.length;
    this.shownQuestionCount = 0;
    this.shownQuestion = this.questions[this.shownQuestionCount];
  },
  methods: {
    selectAnswer(answer) {
      this.showNextBtn = true
      console.log(answer, "ok");
      console.log(
        this.answeredQuestions.findIndex((o) => o.question == answer.question)
      );
      const index = this.answeredQuestions.findIndex(
        (o) => o.question == answer.question
      );
      if (index !== -1) {
        this.answeredQuestions[index].answer = answer.answer;
      } else {
        this.answeredQuestions.push(answer);
        console.log(this.answeredQuestions)
      }
    },
    answered(e) {
      this.selectedAnswer = e;
    },
    finalAnswered() {
      if (this.selectedAnswer == this.questions[this.index]["correctAnswer"])
        this.correctAnswer++;
      else this.wrongAnswer++;
    },
    nextQuestion() {
      this.shownQuestionCount++;
      this.shownQuestion = this.questions[this.shownQuestionCount];
      // this.showNextBtn = false
    },
    prevQuestion() {
      this.shownQuestionCount--;
      this.shownQuestion = this.questions[this.shownQuestionCount];
    },
    showResults() {
      this.finalAnswered();
      this.index++;
    },
    resetQuiz() {
      this.index = 0;
      this.selectedAnswer = "";
      this.correctAnswer = 0;
      this.wrongAnswer = 0;
    },
  },
  components: { MultipleChoiceQuestion, TextQuestion, CheckBox },
};
</script>

<style scoped>
#main {
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e5e7eb;
  height: 38rem;
}

.btn {
  margin: 0px 50px;
  display: flex;
  justify-content: space-between;
  margin-top: -60px;
}

/* RESPONSIVE */
@media only screen and (max-width: 450px) {
  .btn {
    margin: 0px 30px;
    margin-top: -52px;
  }
}
</style>
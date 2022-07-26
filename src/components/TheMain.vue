<template>
  <div id="main">
    <div>
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
      <TextCode v-else-if="shownQuestion && shownQuestion.type == 5"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"/>
      <div class="btn">
        <base-button :disable="shownQuestionCount < 1" @click="prevQuestion">&lt; Prev</base-button>
        <base-button :disable="showNextBtn === false" @click="nextQuestion">Next &gt;</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
import TextQuestion from "./TextQuestion.vue";
import CheckBox from "./CheckBox.vue";
import TextCode from "./TextCode.vue";
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
          answeredQuestions: '',
          type: 0,
        },
        {
          id: "2",
          title:
            "Check Box is a company that specializes in what type of product?",
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
          title: "Boolen Rolex is a company that specializes in what type of product?",
          options: { a: "True", b: "False" },
          answer: "a",
          explanation: "Explanation",
          answeredQuestions: '',
          type: 2,
        },
        {
          id: "4",
          title: "Short Question is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          type: 3,
        },
        {
          id: "5",
          title: "Long Question is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          type: 4,
        },
        {
          id: "6",
          title: "Code of block is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          type: 5,
        },
      ],
      shownQuestion: null,
      showNextBtn: false,
    };
  },
  mounted() {
    this.count = this.questions.length;
    this.shownQuestionCount = 0;
    this.shownQuestion = this.questions[this.shownQuestionCount];
  },
  methods: {
    selectAnswer(answer) {
      this.showNextBtn = true;
      // console.log(answer, "ok");
      console.log(
        this.answeredQuestions.findIndex((o) => o.question == answer.question)
      );
      const index = this.answeredQuestions.findIndex(
        (o) => o.question == answer.question
      );
      if (index !== -1) {
        this.questions.selectedAnswer = answer.answer
          console.log(this.questions.selectedAnswer, 'ok2')
        this.answeredQuestions[index].answer = answer.answer;
        if (answer.answer.length === 0) {
          this.showNextBtn = false
        }
      }
      else {
        this.questions[this.shownQuestionCount].selectedAnswer = answer.answer
        console.log(this.questions.selectedAnswer, 'ok')
        this.answeredQuestions.push(answer);
        console.log(this.answeredQuestions);
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
      this.showNextBtn = false
      console.log(this.questions[this.shownQuestionCount].selectedAnswer, 'ok')
    },
    prevQuestion() {
      this.shownQuestionCount--;
      this.shownQuestion = this.questions[this.shownQuestionCount];
      this.showNextBtn = true
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
  components: { MultipleChoiceQuestion, TextQuestion, CheckBox, TextCode },
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
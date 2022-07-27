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
      <ShortQuestion v-else-if="shownQuestion && shownQuestion.type == 3"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"/>
      <LongQuestion
        v-else-if="shownQuestion && shownQuestion.type == 4"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
      <TextCode v-else-if="shownQuestion && shownQuestion.type == 5"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"/>
        <div v-if="count === shownQuestionCount">
          <the-result>
            <it-button  @click="checkAgainCode" type="warning">Check Again</it-button>
            <it-button  @click="submitQuiz" type="warning">Submit</it-button>
          </the-result>
        </div>
      <div class="btn" v-else>
        <base-button :disable="shownQuestionCount < 1" @click="prevQuestion">&lt; Prev</base-button>
        <base-button :disable="showNextBtn === false" @click="nextQuestion">Next &gt;</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
import LongQuestion from "./LongQuestion.vue";
import CheckBox from "./CheckBox.vue";
import TextCode from "./TextCode.vue";
import TheResult from "./TheResult.vue";
import ShortQuestion from "./ShortQuestion.vue";
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
          answeredQuestion: '',
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
          answeredQuestion: '',
          type: 1,
        },
        {
          id: "3",
          title: "Boolen Rolex is a company that specializes in what type of product?",
          options: { a: "True", b: "False" },
          answer: "a",
          explanation: "Explanation",
          answeredQuestion: '',
          type: 2,
        },
        {
          id: "4",
          title: "Short Question is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          answeredQuestion: '',
          type: 3,
        },
        {
          id: "5",
          title: "Long Question is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          answeredQuestion: '',
          type: 4,
        },
        {
          id: "6",
          title: "Code of block is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          answeredQuestion: '',
          type: 5,
        },
      ],
      shownQuestion: null,
      showNextBtn: false,
      showSubmitDialog: false
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
      // console.log(
      //   this.answeredQuestions.findIndex((o) => o.question == answer.question)
      // );
      const index = this.answeredQuestions.findIndex(
        (o) => o.question == answer.question
      );
      if (index !== -1) {
          this.shownQuestion.answeredQuestion = answer.answer
        this.answeredQuestions[index].answer = answer.answer;
        if (answer.answer.length === 0) {
          this.showNextBtn = false
        }
      }
      else {
        this.shownQuestion.answeredQuestion = answer.answer
        this.answeredQuestions.push(answer);
        // console.log(this.answeredQuestions);
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
      if (this.shownQuestion.answeredQuestion) {
        this.showNextBtn = true
      } else {
        this.showNextBtn = false
      }
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
    checkAgainCode() {
      this.shownQuestionCount = 0;
      this.shownQuestion = this.questions[this.shownQuestionCount];
      this.showNextBtn = true
    },
    submitQuiz() {
      alert('Your quiz has been submited!')
      window.location.reload()
    }
  },
  components: { MultipleChoiceQuestion, LongQuestion, CheckBox, TextCode, TheResult, ShortQuestion },
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
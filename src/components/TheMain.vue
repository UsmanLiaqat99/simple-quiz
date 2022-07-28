<template>
  <div id="main">
    <div>
      <MultipleChoiceQuestion
        v-if="
          shownQuestion && (shownQuestion.type == 0 || shownQuestion.type == 2)
        "
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
      <CheckBox
        v-else-if="shownQuestion && shownQuestion.type == 1"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
      <ShortQuestion
        v-else-if="shownQuestion && shownQuestion.type == 3"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
      <LongQuestion
        v-else-if="shownQuestion && shownQuestion.type == 4"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
      <TextCode
        v-else-if="shownQuestion && shownQuestion.type == 5"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
      <div v-if="count === shownQuestionCount">
        <the-result>
          <it-button @click="prevQuestion" type="warning">&lt; Back</it-button>
          <it-button @click="submitQuiz" type="warning">Submit</it-button>
        </the-result>
        <br />
        <div style="gap: 18px;display:flex; flex-direction:column">
          <div v-for="question in questions" :key="question">
            <MultipleChoiceQuestion v-if="question.type === 0 || question.type === 2" :question="question" disable />
            <CheckBox v-if="question.type === 1" :question="question" disable />
            <ShortQuestion v-if="question.type === 3" :question="question" disable />
            <LongQuestion v-if="question.type === 4" :question="question" disable />
            <LongQuestion v-if="question.type === 5" :question="question" disable />
          </div>
        </div>
      </div>
      <div class="btn" v-else>
        <base-button :disable="shownQuestionCount < 1" @click="prevQuestion"
          >&lt; Prev</base-button
        >
        <base-button :disable="showNextBtn === false" @click="nextQuestion"
          >Next &gt;</base-button
        >
      </div>
      <div class="totalQ"> <span style="color: green;">{{ shownQuestionCount + 1 }}</span><b> / </b><span style="color: green;">{{ count }}</span> </div>
    </div>
  </div>
</template>

<script>
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
import LongQuestion from "./LongQuestion.vue";
import CheckBox from "./CheckBox.vue";
import TextCode from "./TextCode.vue";
import ShortQuestion from "./ShortQuestion.vue";
import TheResult from "./TheResult.vue";
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
          answeredQuestion: "",
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
          answeredQuestion: "",
          type: 1,
        },
        {
          id: "3",
          title:
            "Boolen Rolex is a company that specializes in what type of product?",
          options: { a: "True", b: "False" },
          answer: "a",
          explanation: "Explanation",
          answeredQuestion: "",
          type: 2,
        },
        {
          id: "4",
          title:
            "Short Question is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          answeredQuestion: "",
          type: 3,
        },
        {
          id: "5",
          title:
            "Long Question is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          answeredQuestion: "",
          type: 4,
        },
        {
          id: "6",
          title:
            "Code of block is a company that specializes in what type of product?",
          options: null,
          answer: null,
          explanation: "Explanation",
          answeredQuestion: "",
          type: 5,
        },
      ],
      shownQuestion: null,
      showNextBtn: false,
      showSubmitDialog: false,
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
        this.shownQuestion.answeredQuestion = answer.answer;
        this.answeredQuestions[index].answer = answer.answer;
        if (answer.answer.length === 0) {
          this.showNextBtn = false;
        }
      } else {
        this.shownQuestion.answeredQuestion = answer.answer;
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
        this.showNextBtn = true;
      } else {
        this.showNextBtn = false;
      }
    },
    prevQuestion() {
      this.shownQuestionCount--;
      this.shownQuestion = this.questions[this.shownQuestionCount];
      this.showNextBtn = true;
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
      this.showNextBtn = true;
    },
    submitQuiz() {
      alert("Your quiz has been submited!");
      window.location.reload();
    },
  },
  
  components: {
    TheResult,
    MultipleChoiceQuestion,
    LongQuestion,
    CheckBox,
    TextCode,
    ShortQuestion,
  },
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
  /* height: 38rem; */
}

.btn {
  margin: 0px 50px;
  display: flex;
  justify-content: space-between;
  margin-top: -60px;
}

.totalQ {
  display: flex;
  justify-content: center;
  margin-top: -26px;
}

.totalQ span {
  margin: 0px 10px;
  font-weight: bold;
}

/* RESPONSIVE */
@media only screen and (max-width: 450px) {
  .btn {
    margin: 0px 30px;
    margin-top: -52px;
  }
}
</style>
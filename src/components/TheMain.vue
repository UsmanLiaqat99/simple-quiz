<template>
  <div id="main">
    <div>
      <MultipleChoiceQuestion
        v-if="shownQuestion && (shownQuestion.type == 0 || shownQuestion.type == 2)"
        :question="shownQuestion"
        @selectAnswer="selectAnswer"
      />
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
    <it-button type="success" @click="nextQuestion">Next &gt;</it-button>
  </div>
</template>

<script>
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.vue";
import TextQuestion from "./TextQuestion.vue";
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
          title: "Rolex is a company that specializes in what type of product?",
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
          options: { a: "True", b: "Fakse" },
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
    };
  },
  mounted() {
    this.count = this.questions.length;
    this.shownQuestionCount = 0;
    this.shownQuestion = this.questions[this.shownQuestionCount];
  },
  methods: {
    selectAnswer(answer) {
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
  components: { MultipleChoiceQuestion, TextQuestion },
};
</script>

<style scoped>
#main {
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e7eb;
  height: 37rem;
}

.main_title {
  color: blue;
  font-size: 32px;
  text-align: center;
}

.mainQuiz {
  max-width: 600px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 50px 80px 50px;
  background-color: white;
  border-radius: 5px;
}

.mainQuiz label {
  padding: 15px;
  border: 1px solid grey;
  margin: 10px 0px;
  border-radius: 5px;
  font-size: 18px;
}

.input_label:hover {
  background-color: #f1f3f4;
}

.input_label_red {
  background-color: rgba(128, 128, 128, 0.808);
}

.input_label_green {
  background-color: #83f4c5;
}

.btn {
  margin-top: -60px;
  margin-left: 210px;
}

.mainQuiz2 {
  margin-top: 100px;
}

.mainQuiz2 h2 {
  font-size: 30px;
}

.result p {
  font-size: 20px;
  margin: 10px 0px;
}

.playAgain {
  margin-top: 20px;
}
</style>
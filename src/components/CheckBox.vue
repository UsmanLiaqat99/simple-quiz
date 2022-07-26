<template>
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
  data() {
    return {
      index: 0,
      selectedAnswer: "",
      selectedChecks: [],
      eachQuestion: [],
      correctAnswer: 0,
      wrongAnswer: 0,
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
        {
          question: "When did Facebook launch?",
          answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
          correctAnswer: "d",
        },
        {
          question: "Albert Einstein was the best...",
          answers: {
            a: "Teacher",
            b: "Student",
            c: "Lawer",
            d: "Banker",
            e: "Lotta",
          },
          correctAnswer: "b",
        },
      ],
    };
  },
  mounted() {
    this.count = this.questions.length;
  },
  methods: {
    answered(e) {
      this.selectedChecks = e;
      console.log();
    },
    finalAnswered() {
      if (this.selectedAnswer == this.questions[this.index]["correctAnswer"])
        this.correctAnswer++;
      else this.wrongAnswer++;
    },
    nextQuestion() {
      this.eachQuestion = this.eachQuestion.push(this.selectedChecks);
      console.log(this.eachQuestion);
      this.selectedChecks = [];
      this.finalAnswered();
      this.index++;
      this.selectedAnswer = "";
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
    getType(i) {
      switch (i) {
        case 0:
          return "Multiple Choice Questions";
        case 1:
          return "Multiple Choice Questions With Multiple Answers";
        case 2:
          return "True/False Question";
        case 3:
          return "Short Question";
        case 4:
          return "Long Question";
        case 5:
          return "Code Question";
      }
    },
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
  background-color: #e5e7eb;
  height: 37rem;
}

.main_title {
  /* margin-top: 50px; */
  /* margin-top: 5px; */
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
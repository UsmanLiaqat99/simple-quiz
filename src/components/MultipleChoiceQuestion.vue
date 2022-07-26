<template>
  <div v-if="question">
    <div class="mainQuestion">
      <h2 class="questionTitle">
        {{ question.title }}
      </h2>
      <label :for="key" v-for="(option, i) in Object.keys(question.options)" :key="i" :class="[
        { input_label: selectedAnswer !== option },
        { input_label_selected: selectedAnswer == option },
      ]">
        <input class="hidden" type="radio" :id="i" :value="option" @change="selectAnswer" v-model="selectedAnswer" />
        {{ question.options[option] }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultipleChoiceQuestion",
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
          type: 0,
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

<style >
.mainQuestion {
  max-width: 600px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 50px 80px 50px;
  background-color: white;
  border-radius: 5px;
}

.mainQuestion label {
  padding: 15px;
  border: 1px solid grey;
  margin: 10px 0px;
  border-radius: 5px;
  font-size: 18px;
}

.input_label:hover {
  background-color: #f1f3f4;
}

.input_label_selected {
  background-color: rgba(128, 128, 128, 0.808);
}

.input_label_red {
  background-color: rgba(128, 128, 128, 0.808);
}

.input_label_green {
  background-color: #83f4c5;
}

/* RESPONSIVE */
@media only screen and (max-width: 750px) {
  .mainQuestion {
    max-width: 250px;
    min-width: 250px;
  }
}

@media only screen and (max-width: 450px) {
  .mainQuestion label {
    padding: 10px;
  }

  .mainQuestion {
    padding: 20px 20px 80px 20px;
  }
}
</style>
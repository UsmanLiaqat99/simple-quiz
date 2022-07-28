<template>
    <div class="mainQuestion">
      <h2 class="questionTitle">
        {{ question.title }}
      </h2>
      <textarea style="resize: vertical;" :disabled="disable" class="input_label" v-model="selectedAnswer" type="text" @change="selectAnswer" />
    </div>
</template>


<script>
export default {
  name: "TextQuestion",
  props: {
    question: {
      type: Object
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedAnswer: ''
    };
  },
  mounted() {
    this.shownAnswer()
  },
  methods: {
    mounted() {
      this.shownAnswer()
    },
    shownAnswer() {
      if (this.question.answeredQuestion) {
        console.log(this.question.answeredQuestion)
        this.selectedAnswer = this.question.answeredQuestion
      }
    },
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


<style scoped>
.mainQuestion input, .mainQuestion textarea {
  padding: 8px;
  outline: none;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: 18px;
}

.mainQuestion textarea {
  height: 120px;
}

@media only screen and (max-width: 750px) {
  .questionTitle {
    font-size: 18px;
  }

  .input_label {
    padding: 10px;
  }
}
</style>
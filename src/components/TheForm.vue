<template>
    <div class="main">
        <div class="subMain">
            <div class="logo">
                <img src="../assets/images/logo.png" alt="logo">
            </div>

            <div class="form">
                <form @submit.prevent="startQuiz">
                    <div class="input">
                        <it-input v-model="name" label-top="Your Name" />
                    </div>
                    <div class="input">
                        <it-input type="email" v-model="email" label-top="Email" />
                    </div>
                    <div class="input">
                        <it-input type="number" v-model="number" label-top="Phone#" />
                    </div>
                    <div class="input">
                        <it-textarea v-model="msg" label-top="Message" />
                    </div>
                    <p style="color: red; margin-top: 5px;" v-show="err">Make sure you fill all fields correct!</p>
                    <it-button class="btn" type="warning">Start Quiz</it-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            number: '',
            msg: '',
            err: false
        }
    },
    methods: {
        startQuiz() {
            if (this.name != '' && this.email != '' && this.email.includes('@') && this.number != '' && this.msg != '') {
                const userData = {
                    name: this.name,
                    email: this.email,
                    number: this.number,
                }
                this.$store.dispatch('userInfo', userData)
                this.$router.push("/category")
            }
            else {
                this.err = true
            }
        }
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 38rem;
    background-color: #e5e7eb;
}

.subMain {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 60%;
    padding: 0px 20px 20px 20px;
    border-radius: 5px;
}

.logo {
    display: flex;
    justify-content: center;
    padding: 50px 0px;
}

.logo img {
    width: 200px;
}

.btn {
    text-decoration: none;
    margin-top: 30px;
}

.input {
    margin: 10px 0px;
}
</style>
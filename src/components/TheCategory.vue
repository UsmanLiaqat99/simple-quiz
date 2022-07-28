<template>
    <div class="main">
        <div class="subMain" @click="selecetCategory">
            <h2>Which type of test you want to held?</h2>
            <p>
                Frontend Developer
            </p>
            <p>
                Backend Developer
            </p>
            <p>
                Full Stack Developer
            </p>
            <p>
                Flutter Developer
            </p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        selecetCategory() {
            this.$router.push('/quiz')
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
    width: 50%;
    padding: 0px 20px 30px 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.subMain p {
    margin: 10px 0px;
    padding: 12px 20px;
    width: 80%;
    border-radius: 5px;
    font-size: 18px;
    background-color: #e5e7eb;
    border: 1px solid grey;
    cursor: pointer;
}

.subMain p:hover {
    background-color: grey;
    color: white;
}
</style>
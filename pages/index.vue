<template>
  <div class="mt-5 mx-20 relative">
    <h1 class="text-2xl text-blue-500 mb-5">Input</h1>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        v-model.trim="inputNumber"
        placeholder="Wprowadź dowolne liczby"
      />
      <div v-if="inputNumber.split(',').length < 3 && inputNumber.length > 0">
        <p>Wprowadź minimum 3 liczby</p>
      </div>
      <button
        class="primary-button"
        type="submit"
        :disabled="inputNumber.split(',').length < 3 ? true : false"
      >
        Wyślij
      </button>
    </form>
    <div class="mt-20 ">
      <p>test</p>
  {{ myNumber }}
    </div>
  </div>
</template>
<script setup lang="ts">
import {toNumber, findOutlier} from "@/utils/function"
const inputNumber = ref("");
const myNumber = ref<any>()
const myNumber1 = ref<number []>([])



function onSubmit() {

  let array = inputNumber.value.split(',')
  let numberArray = array.map(toNumber);

 let number = findOutlier(numberArray);
console.log(number)

 myNumber.value = numerOk(number)
}


</script>

<template>
  <div class="pt-5 mx-20 grid place-items-center">
    <div class="retangle">
      <div class="flex flex-col justify-start mb-2">
        <h1 class="text-2xl font-medium">
          Znajdź liczbę, która <span class="primary font-2xl"> nie pasuje</span><br> do pozostałych
        </h1>
        <p class="mt-4">Wyprowadź minumum 3 liczby oddzielając je<br>przecinkami a aplikacja znajdzie liczbę,<br>która nie pasuje do pozostałych </p>
      </div>
      <form @submit.prevent="onSubmit">
        <input
          type="text"
          v-model.trim="inputNumber"
          placeholder="Twoje liczby"
          autofocus
        />
        <button
        class="primary-button"
        type="submit"
        :disabled="inputNumber.split(',').length < 3 ? true : false"
        >
        Wyślij
      </button>
      <div v-if="inputNumber.split(',').length < 3 && inputNumber.length > 0">
        <p class="text-des-error">Wprowadź 3 liczby</p>
        </div>
      </form>
      <div v-if="myNumber" class="flex mt-12 columns-2 justify-between w-full">
        <div  class=" ">
          <p class="text-2xl font-medium">Niepasująca liczba:</p>
          <p class="primary text-xl">{{ myNumber }}</p>
        </div>
        <div class="mt-1.5">
          <button @click="onClick()" class="remove">Usuń wynik</button>
        </div>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toNumber, findOutlier } from "@/utils/function";
const inputNumber = ref<any>("");
const myNumber = ref<any>();

function onSubmit() {
  let array = inputNumber.value.split(",");
  let numberArray = array.map(toNumber);

  let number = findOutlier(numberArray);
  console.log(number);

  myNumber.value = numerOk(number);
}

function onClick(){
  myNumber.value = false
  inputNumber.value = ""

}

</script>

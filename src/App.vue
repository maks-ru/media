<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

import {ref} from "vue";
import YandexMap from './components/YandexMap.vue'

const items = ref([
  {
    question: 'Как социальные сети помогут моему бизнесу?',
    answer: 'Уже на этапе первой беседы грамотный специалист может внятно изложить, какую пользу принесет его работа. Социальные сети — это миллионные аудитории, пользователи, среди которых есть ваши потенциальные клиенты.'
  },
  {
    question: 'Как увеличить вовлеченность подписчиков?',
    answer: 'Уже на этапе первой беседы грамотный специалист может внятно изложить, какую пользу принесет его работа. Социальные сети — это миллионные аудитории, пользователи, среди которых есть ваши потенциальные клиенты.'
  },
  {
    question: 'Какие платформы лучше использовать?',
    answer: 'Уже на этапе первой беседы грамотный специалист может внятно изложить, какую пользу принесет его работа. Социальные сети — это миллионные аудитории, пользователи, среди которых есть ваши потенциальные клиенты.'
  }
]);

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div
      class="bg-[url('../assets/img/bg-top.jpg')] bg-cover bg-no-repeat bg-center"
  >
    <header class="mb-[190px]">
      <TheHeader/>
    </header>
    <div
        class="pt-10 flex flex-col items-center text-center mx-auto w-[936px] mb-[200px]"
    >
      <h1 class="text-white text-5xl font-medium mb-[33px]">
        Круто делаем
        <span
            class="text-5xl font-medium bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text text-transparent leading-normal"
        >SEO-оптимизацию</span
        >
        для бизнеса, редакций и СМИ
      </h1>
      <div class="mb-[60px]">
        <p class="text-white text-lg">
          Широкий перечень услуг и профессионализм наших сотрудников позволит
          вам экономить время и решить все бизнес-задачи быстро и эффективно!
        </p>
      </div>
      <button
          type="button"
          class="transtion group flex py-[24px] px-[38px] items-center justify-center rounded-full bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#F71B2C]/30"
      >
        <div
            class="flex h-full w-full items-center font-bold text-sm justify-center rounded-full transition duration-300 ease-in-out group-hover:from-[#F71B2C] group-hover:to-[#FF7027] group-hover:transition group-hover:duration-300 group-hover:ease-in-out"
        >
          ПОЛУЧИТЬ БЕСПЛАТНЫЙ АУДИТ
        </div>
      </button>
    </div>
    <div
        class="flex items-center justify-between text-center px-[330px] pb-24 gap-24"
    >
      <div class="text-white">
        <div class="font-light text-5xl mb-5">12</div>
        <span class="text-lg">Лет на рынке</span>
      </div>
      <div class="text-white">
        <div class="font-light text-5xl mb-5">1258</div>
        <span class="text-lg">Клиентов по всей Стране</span>
      </div>
      <div class="text-white">
        <div class="font-light text-5xl mb-5">300 млн.</div>
        <span class="text-lg">Откручивается в год в рекламе</span>
      </div>
      <div class="text-white">
        <div class="font-light text-5xl mb-5">35</div>
        <span class="text-lg">Сотрудников в штате</span>
      </div>
    </div>
  </div>

  <main
      class="bg-[url('../assets/img/bg-main.jpg')] bg-cover bg-no-repeat bg-center"
  >
    <!--  -->
    <div class="mb-[70px]">
      <div class="flex items-center justify-between pt-[120px] px-[320px] mb-8">
        <div class="flex items-center justify-between gap-14">
          <div class="relative group">
            <a
                href="#"
                class="text-[#7E7EA5] hover:text-transparent bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text transition-all duration-300"
            >Онлайн продвижение</a
            >
            <div
                class="absolute rounded-lg top-[62px] left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
            ></div>
          </div>

          <div class="relative group">
            <a
                href="#"
                class="text-[#7E7EA5] hover:text-transparent bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text transition-all duration-300"
            >Офлайн продвижение</a
            >
            <div
                class="absolute rounded-lg top-[62px] left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
            ></div>
          </div>
        </div>
        <button
            type="button"
            class="transtion group flex h-[44px] w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#F71B2C]/30"
        >
          <div
              class="flex h-full w-full items-center justify-center rounded-full bg-[#0F0F34] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out"
          >
            Заказать звонок
          </div>
        </button>
      </div>
      <div class="border-b border-[#2D2D5A]"></div>
    </div>
    <!--  -->
    <div
        class="px-[320px] flex items-center justify-between flex-wrap mb-[170px]"
    >
      <div
          class="flex items-start justify-start w-[410px] h-[179px] p-6 text-white border border-[#2D2D5A] rounded-lg mb-[25px]"
      >
        <div class="mr-[23px]">
          <img src="./assets/img/icons/item1.svg" alt="item" class=""/>
        </div>
        <div>
          <div class="mb-2 text-lg font-semibold">Ведение соц.сетей (SMM)</div>
          <p class="mb-4 text-sm">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
          <div class="flex items-center gap-1">
            <a
                href="#"
                class="text-xs font-bold uppercase text-transparent bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text"
            >Подробнее</a
            >
            <img src="./assets/img/icons/arrow.svg" alt="arrow"/>
          </div>
        </div>
      </div>
      <div
          class="flex items-start justify-start w-[410px] h-[179px] p-6 text-white border border-[#2D2D5A] rounded-lg mb-[25px]"
      >
        <div class="mr-[23px]">
          <img src="./assets/img/icons/item2.svg" alt="item" class=""/>
        </div>
        <div>
          <div class="mb-2 text-lg font-semibold">Ведение соц.сетей (SMM)</div>
          <p class="mb-4 text-sm">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
          <div class="flex items-center gap-1">
            <a
                href="#"
                class="text-xs font-bold uppercase text-transparent bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text"
            >Подробнее</a
            >
            <img src="./assets/img/icons/arrow.svg" alt="arrow"/>
          </div>
        </div>
      </div>
      <div
          class="flex items-start justify-start w-[410px] h-[179px] p-6 text-white border border-[#2D2D5A] rounded-lg mb-[25px]"
      >
        <div class="mr-[23px]">
          <img src="./assets/img/icons/item3.svg" alt="item" class=""/>
        </div>
        <div>
          <div class="mb-2 text-lg font-semibold">Ведение соц.сетей (SMM)</div>
          <p class="mb-4 text-sm">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
          <div class="flex items-center gap-1">
            <a
                href="#"
                class="text-xs font-bold uppercase text-transparent bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text"
            >Подробнее</a
            >
            <img src="./assets/img/icons/arrow.svg" alt="arrow"/>
          </div>
        </div>
      </div>
      <div
          class="flex items-start justify-start w-[410px] h-[179px] p-6 text-white border border-[#2D2D5A] rounded-lg mb-[25px]"
      >
        <div class="mr-[23px]">
          <img src="./assets/img/icons/item4.svg" alt="item" class=""/>
        </div>
        <div>
          <div class="mb-2 text-lg font-semibold">Ведение соц.сетей (SMM)</div>
          <p class="mb-4 text-sm">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
          <div class="flex items-center gap-1">
            <a
                href="#"
                class="text-xs font-bold uppercase text-transparent bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text"
            >Подробнее</a
            >
            <img src="./assets/img/icons/arrow.svg" alt="arrow"/>
          </div>
        </div>
      </div>
      <div
          class="flex items-start justify-start w-[410px] h-[179px] p-6 text-white border border-[#2D2D5A] rounded-lg mb-[25px]"
      >
        <div class="mr-[23px]">
          <img src="./assets/img/icons/item5.svg" alt="item" class=""/>
        </div>
        <div>
          <div class="mb-2 text-lg font-semibold">Ведение соц.сетей (SMM)</div>
          <p class="mb-4 text-sm">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
          <div class="flex items-center gap-1">
            <a
                href="#"
                class="text-xs font-bold uppercase text-transparent bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text"
            >Подробнее</a
            >
            <img src="./assets/img/icons/arrow.svg" alt="arrow"/>
          </div>
        </div>
      </div>
      <!--  -->
      <div
          class="flex items-start justify-start w-[410px] h-[179px] p-6 text-white border border-[#2D2D5A] rounded-lg mb-[25px]"
      >
        <div class="mr-[23px]">
          <img src="./assets/img/icons/item6.svg" alt="item" class=""/>
        </div>
        <div>
          <div class="mb-2 text-lg font-semibold">Ведение соц.сетей (SMM)</div>
          <p class="mb-4 text-sm">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться.
          </p>
          <div class="flex items-center gap-1">
            <a
                href="#"
                class="text-xs font-bold uppercase text-transparent bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] bg-clip-text"
            >Подробнее</a
            >
            <img src="./assets/img/icons/arrow.svg" alt="arrow"/>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="relative w-[1170px] h-[407px] m-auto mb-[180px]">
      <img
          src="./assets/img/icons/tg.svg"
          alt="tg"
          class="absolute z-10 right-[-20px] top-[-10px]"
      />
      <div class="relative z-10 m-auto pt-20 pb-[78px] w-[731px] text-center">
        <div class="text-white">
          <div class="text-4xl font-semibold mb-6">
            Закажите консультацию специалиста
          </div>
          <p class="text-[#C1CAF1] text-center text-xl font-light mb-14 px-24">
            Мы подберем те каналы, которые помогут вашему бизнесу вырасти на
            20-30% уже через месяц
          </p>
        </div>
        <div class="flex items-center justify-between gap-8">
          <div class="relative border-2 border-[#71719C] rounded-full">
            <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                class="pl-[70px] placeholder:text-lg placeholder:text-[#71719C] placeholder:font-semibold transtion group flex w-[370px] h-[70px] py-6 opacity-20 items-center justify-center rounded-full bg-gradient-to-r from-[#26325F] to-[#293663] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#293663]/30"
            />
            <img
                src="./assets/img/icons/phone.svg"
                alt="phone"
                class="absolute bottom-[25px] left-[25px]"
            />
          </div>

          <button
              type="button"
              class="transtion group flex w-[370px] h-[70px] py-6 pl-7 items-center justify-center rounded-full bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#F71B2C]/30"
          >
            <div
                class="flex items-center px-[23px] py-[20px] font-bold text-sm justify-center rounded-full transition duration-300 ease-in-out group-hover:from-[#F71B2C] group-hover:to-[#FF7027] group-hover:transition group-hover:duration-300 group-hover:ease-in-out uppercase"
            >
              Заказать консультацию
            </div>
          </button>
        </div>
      </div>
      <div
          class="w-[1170px] h-[407px] bg-[#181827] m-auto custom-block absolute top-0"
      >
        <img
            src="./assets/img/circle-right.png"
            alt=""
            class="absolute right-0"
        />
        <img
            src="./assets/img/circle-left.png"
            alt=""
            class="absolute bottom-[-10px] left-[-80px]"
        />
      </div>

      <img
          src="./assets//img/plus.png"
          alt="plus"
          class="absolute right-[-100px] bottom-[-70px]"
      />
    </div>
    <!--  -->
    <div class="m-auto flex items-center flex-col content-center mb-[150px]">
      <div class="text-white text-center text-5xl font-medium mb-24 w-[770px]">
        Почему 10 лет клиенты отдают предпочтение нам?
      </div>
      <div class="flex items-center justify-between gap-20 px-[418px] mb-24">
        <img src="./assets/img/social.png" alt="social"/>
        <div class="flex justify-items-start flex-col">
          <div class="text-white">
            <div class="text-3xl font-medium mb-6">
              Мультиканальное продвижение
            </div>
            <p class="text-white text-left text-lg font-light mb-11">
              У бренда могут быть настроены рекламные кампании, запущены
              email-рассылки и заведены профили в соцсетях. Отличительная черта
              этой стратегии в том, что все каналы существуют отдельно друг от
              друга. Перед каждым из них ставится своя задача по развитию, по
              ним не ведут общую статистику и не собирают комплексные данные.
            </p>
          </div>
          <button
              type="button"
              class="transtion group flex w-[370px] h-[70px] py-6 items-center justify-center rounded-full bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#F71B2C]/30"
          >
            <div
                class="flex items-center px-[23px] py-[20px] font-bold text-sm justify-center rounded-full transition duration-300 ease-in-out group-hover:from-[#F71B2C] group-hover:to-[#FF7027] group-hover:transition group-hover:duration-300 group-hover:ease-in-out uppercase"
            >
              Заказать услугу
            </div>
          </button>
        </div>
      </div>

      <div class="flex items-center justify-between gap-20 px-[418px]">
        <div class="flex justify-items-start flex-col">
          <div class="text-white">
            <div class="text-3xl font-medium mb-6">
              Мультиканальное продвижение
            </div>
            <p class="text-white text-left text-lg font-light mb-11">
              У бренда могут быть настроены рекламные кампании, запущены
              email-рассылки и заведены профили в соцсетях. Отличительная черта
              этой стратегии в том, что все каналы существуют отдельно друг от
              друга. Перед каждым из них ставится своя задача по развитию, по
              ним не ведут общую статистику и не собирают комплексные данные.
            </p>
          </div>
          <button
              type="button"
              class="transtion group flex w-[370px] h-[70px] py-6 items-center justify-center rounded-full bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#F71B2C]/30"
          >
            <div
                class="flex items-center px-[23px] py-[20px] font-bold text-sm justify-center rounded-full transition duration-300 ease-in-out group-hover:from-[#F71B2C] group-hover:to-[#FF7027] group-hover:transition group-hover:duration-300 group-hover:ease-in-out uppercase"
            >
              Заказать услугу
            </div>
          </button>
        </div>
        <img src="./assets/img/objects.png" alt="object"/>
      </div>
    </div>
    <!--  -->
    <div class="px-16 mb-[180px]">
      <div class="text-white text-center text-5xl font-medium mb-20">
        Наши клиенты
      </div>
      <div class="flex items-center justify-center gap-20">
        <img src="./assets/img/icon-clients/ozon.png" alt="ozon" class="w-[10%]"/>
        <img src="./assets/img/icon-clients/joom.png" alt="joom" class="w-[10%]"/>
        <img src="./assets/img/icon-clients/tinkoff.png" alt="tinkoff" class="w-[10%]"/>
        <img src="./assets/img/icon-clients/onrealt.png" alt="onreal" class="w-[10%]"/>
        <img src="./assets/img/icon-clients/vk.png" alt="vk" class="w-[10%]"/>
        <img src="./assets/img/icon-clients/skyeng.png" alt="skyeng" class="w-[10%]"/>
      </div>
    </div>
    <!--  -->
    <div class="mb-[180px]">
      <div class="text-white text-center text-5xl font-medium mb-20">
        Популярные вопросы
      </div>
      <div class="flex items-center flex-col gap-5">
        <div v-for="(item, index) in items" :key="index"
             class="w-[890px] p-10 border rounded-lg shadow-md text-white m-auto border-[#2E2E4B]">
          <button
              class="w-full text-left p-4 text-white flex justify-between items-center"
              @click="toggle(index)">
            {{ item.question }}
            <span :class="{'rotate-180': activeIndex === index}" class="transition-transform">
              <img src="./assets/img/icons/arrow-t.svg" alt="arrow"/>
            </span>
          </button>
          <div v-if="activeIndex === index" class="p-4  text-gray-300">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="relative w-[1170px] h-[407px] m-auto mb-[160px]">
      <div class="flex items-center justify-between">
        <div class="relative z-10 pl-[75px] py-16 text-center">
          <div class="text-white mb-8 w-[700px]">
            <div class="text-4xl font-semibold mb-6">
              Есть вопросы, на которые нужно получить ответ?
            </div>
            <div class="flex items-center gap-7 mb-3">
              <img src="./assets/img/icons/shield.svg" alt="shield"/>
              <p class="text-[#C1CAF1] text-center text-lg font-semibold">
                Мы подберем для вас актуальные каналы продвижения
              </p>
            </div>
            <div class="flex items-center gap-7 mb-3">
              <img src="./assets/img/icons/shield.svg" alt="shield"/>
              <p class="text-[#C1CAF1] text-center text-lg font-semibold">
                Ответим на все интересующие вопросы
              </p>
            </div>
            <div class="flex items-center gap-7">
              <img src="./assets/img/icons/shield.svg" alt="shield"/>
              <p class="text-[#C1CAF1] text-center text-lg font-semibold">
                Сориентируем по стоимости
              </p>
            </div>
          </div>

          <button
              type="button"
              class="transtion group flex w-[320px] h-[70px] py-6 items-center justify-center rounded-full bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#F71B2C]/30"
          >
            <div
                class="flex items-center font-bold text-sm justify-center rounded-full transition duration-300 ease-in-out group-hover:from-[#F71B2C] group-hover:to-[#FF7027] group-hover:transition group-hover:duration-300 group-hover:ease-in-out uppercase"
            >
              Заказать консультацию
            </div>
          </button>
        </div>
        <img
            src="./assets/img/girl.png"
            alt="tg"
            class="absolute z-10 right-[15px] bottom-[-53px]"
        />
      </div>
      <div
          class="w-[1170px] h-[460px] bg-[#181827] m-auto custom-block absolute top-0"
      ></div>

      <img
          src="./assets/img/plus.png"
          alt="plus"
          class="absolute right-[-100px] bottom-[-125px]"
      />
    </div>
    <!--  -->
    <div class="mb-20">
      <!--Map-->
      <YandexMap/>
      <!--Map-->
    </div>
    <!--  -->
    <div class="w-[1170px] m-auto pb-14">
      <TheFooter/>
    </div>
  </main>
</template>


<style scoped>
button:focus {
  outline: none;
}
</style>

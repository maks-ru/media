<template>
  <div class="flex items-center justify-between pt-10 px-[120px] text-white">
    <div class="flex items-center">
      <img src="../assets/img/icons/logo.png" alt="logo" class="mr-[10px]"/>
      <div class="flex flex-col">
        <h3 class="text-2xl mb-2">Медиа Ресурс.РФ</h3>
        <span class="text-[10px] uppercase"
          >Рекламное агенство полного Цикла</span
        >
      </div>
    </div>
    <nav v-if="false">
      <ui class="flex items-center justify-between gap-[65px]">
        <li><a href="#">Услуги</a></li>
        <li><a href="#">Клиенты</a></li>
        <li><a href="#">Контакты</a></li>
      </ui>
    </nav>
    <div class="flex items-center justify-between">
      <div class="mr-[18px]" v-if="false">
        <img src="../assets/img/icons/whatsapp.png" alt="" />
      </div>
      <div class="flex flex-col">
        <p class="text-text-lg font-extrabold mb-2">+7 (909) 089 18 89</p>
        <p class="text-sm">Работаем с 8:00 до 20:00</p>
      </div>
    </div>
    <button
        v-if="false"
      type="button"
      class="transtion group flex h-[44px] w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#F71B2C] via-[#ED1B8D] to-[#FF7027] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#F71B2C]/30"
    >
      <div
        class="flex h-full w-full  items-center justify-center rounded-full bg-[#0F0F34] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out"
      >
        Заказать звонок
      </div>
    </button>
  </div>

</template>

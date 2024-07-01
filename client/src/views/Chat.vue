<template>
    <div class="flex flex-row justify-start items-center h-screen bg-slate-50">
        <Menu :model="items" class="ml-4" style="width: 5%; height: 95vh;">
            <template #start>
                <span class="flex flex-row justify-center items-center mt-4">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" size="large"/>
                </span>
            </template>
            <template #end>
                <span class="pi pi-sign-out"></span>
            </template>
        </Menu>
        <div class="custom-card mx-4" style="width: 25%; height: 95vh; overflow: hidden;" >
            <p class="m-5 font-sans font-extrabold">
                Chat Groups
            </p>
            <div class="flex flex-col justify-between">
                <div v-for="chat in chatRoomData" :key="chat.room">
                    <div class="flex flex-col justify-start" style="margin: 0.5rem 0.5rem 0 0.5rem;">
                        <div class="flex flex-row justify-start">
                            <div style="flex: 1;" class="flex flex-row justify-center align-center px-1">
                                <Avatar :image=chat.photo shape="circle" size="large"/>
                            </div>
                            <div style="flex: 4;">
                                <div class="flex flex-row justify-between flex-wrap" style="width: 96%;">
                                    <p class="font-sans font-bold">{{ chat.room }}</p>
                                    <p class="font-sans text-xs chattime">{{ chat.time }}</p>
                                </div>
                                <p class="font-sans text-sm pt-1">{{ chat.msg }}</p>
                            </div>
                        </div>
                        <div class="flex flex-row justify-center align-center py-3">
                            <hr style="width: 95%; border: none; height: 2px; background-color: #e5e7eb; ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="custom-card ml-2 mr-3 flex flex-col justify-start" style="width: 70%; height: 95vh; overflow: hidden;">
            <div class="flex flex-col justify-start">
                <div class="flex flex-row justify-between items-center" style="margin: 1rem 1rem 0 1rem;">
                    <div class="flex flex-row justify-start">
                        <div class="flex flex-row justify-center align-center p-3">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" size="xlarge"/>
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="font-sans font-bold p-1">Vue</p>
                            <p class="font-sans p-1">Online</p>
                        </div>
                    </div>
                    <div class="mx-3">
                        <i class="pi pi-ellipsis-v"></i>
                    </div>
                </div>
                <hr style="width: 95%; border: none; height: 2px; background-color: #e5e7eb; margin: 0 auto;">
            </div>
            <p style="flex: 1" class="m-5 overflow-y-auto">
                 <div class="user" v-for="(chat, index) in chatData" :key="index" :class="{ 'local': chat.username == 'Andreea', 'remote': chat.username != 'Andreea'}">
                    <div class="name" v-if="chat.username != 'Andreea'">{{ chat.username }}</div>
                    <div class="text">{{ chat.text }}</div>
                </div>
            </p>
            <div class="flex flex-row justify-start m-3" >
                <InputText type="text" class="bg-slate-100 border-none mx-3" style="width: 95%;"/>
                <Button icon="pi pi-send" class="mx-3 square"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Menu from 'primevue/menu';
import 'primeicons/primeicons.css';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref, onMounted } from "vue";
import { type chat, type chatRoom } from '../models/shared';
import chatRoomjson from '../assets/chatRoomData.json'
import chatjson from '../assets/chatData.json'

const items = ref([
    { icon: 'pi pi-comment' },
    { icon: 'pi pi-home' }
]);

const chatRoomData = ref<chatRoom[]>([]);
const chatData = ref<chat[]>([]);

const getChatRoomData = async () => {
    chatRoomData.value = chatRoomjson;
    console.log(chatRoomData.value);
}

const getChatData = async () => {
    chatData.value = chatjson;
    console.log(chatData.value);
}

onMounted(() => {
    getChatRoomData();
    getChatData();
});

</script>

<style lang="scss" scoped>
$primary-color: #f59e0b;

:deep(.p-menu){
    background-color: $primary-color;
    border: none;
    min-width: 5rem;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    .p-menuitem{
        .p-menuitem-content{
            .p-menuitem-link{
                padding: 0.75rem 2rem;
            }
        }
    } 
    .p-menu-start{
        flex: 1;
    }
    .p-menu-list{
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .pi{
            font-size: 1.3rem;
            color: white;
        }
    }
    .p-menu-end{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .pi{
            font-weight: bold;
            font-size: 1.3rem;
            color: white;
        }
    }
}

.custom-card{
    background: #ffffff;
    color: #4b5563;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
}

.square {
  position: relative;
  width: 5%;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 50%;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
}

.user {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  .text {
    background-color: #aaa;
    padding: 16px;
    border-radius: 10px;
    position: relative;
  }
}

.remote {
    flex-direction: column;
    margin-left: 35px;
  .name {
    font-size: 0.8rem;
    color: #aaa;
  }
  .text {
    margin-right: 80px;
    color: #eee;
    background-color: #f59e0b;
    opacity: 0.7;
    &::after {
      border-right: 10px solid #f59e0b;
      left: -10px;
    }
  }
}

.local {
  justify-content: flex-end;
  .text {
    margin-right: 35px;
    margin-left: 80px;
    order: -1;
    background-color: #fff;
    border: #aaa 1px solid;
    color: #333;
    &::after {
      border-left: 10px solid #fff;
      right: -10px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 19px;
      right: -11px;
      border-width: 11px 0px 11px 11px;
      border-color: transparent transparent transparent #aaa;
    }
  }
}

.remote,
.local {
  & .text::after {
    content: "";
    position: absolute;
    top: 20px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .text {
    font-weight: 500;
    box-shadow: 0 0 2px #888;
  }
}

@media (width < 768px){
    .chattime{
        display: none;
    }
}
</style>
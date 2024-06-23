<template>
    <div class="flex flex-row justify-start items-center h-screen">
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
                <div v-for="chat in chatData" :key="chat.room">
                    <div class="flex flex-col justify-start" style="margin: 0.5rem 0.5rem 0 0.5rem;">
                        <div class="flex flex-row justify-start">
                            <div style="flex: 1;" class="flex flex-row justify-center align-center">
                                <Avatar :image=chat.photo shape="circle" size="large"/>
                            </div>
                            <div style="flex: 4;">
                                <p class="font-sans font-bold">{{ chat.room }}</p>
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
        <div class="custom-card ml-2 mr-3" style="width: 70%; height: 95vh;">
            <p class="m-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Menu from 'primevue/menu';
import 'primeicons/primeicons.css';
import Avatar from 'primevue/avatar';
// import Card from 'primevue/card';
import Divider from 'primevue/divider';
import { ref, onMounted } from "vue";
import { type chat } from '../models/shared';
import json from '../assets/data.json'

const items = ref([
    { icon: 'pi pi-comment' },
    { icon: 'pi pi-home' }
]);

const chatData = ref<chat[]>([]);

const getChatData = async () => {
    chatData.value = json;
    console.log(chatData.value);
}

onMounted(() => {
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
</style>
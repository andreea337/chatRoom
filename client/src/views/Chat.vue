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
                <div v-for="chat in chatData" :key="chat.room">
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
        <div class="custom-card ml-2 mr-3 flex flex-col justify-between" style="width: 70%; height: 95vh;">
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
            <p class="m-5" style="flex: 1;">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
            <div class="flex flex-row justify-start m-3">
                <InputText type="text" class="bg-slate-100 border-none mx-3" style="width: 90%;"/>
                <Button icon="pi pi-send" class="mx-3 square-button" />
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

.square-button {
    width: 10%;
    // padding-top: calc(10% - 2 * 0.75rem); /* Adjust padding to keep it square, considering margin */
    // padding-bottom: calc(10% - 2 * 0.75rem); /* Adjust padding to keep it square, considering margin */
    // height: auto;
}

@media (width < 768px){
    .chattime{
        display: none;
    }
}
</style>
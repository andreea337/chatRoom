<template>
    <div class="flex flex-row justify-start items-center h-screen">
        <Menu :model="items" class="ml-4">
            <template #start>
                <span class="flex flex-row justify-center items-center mt-4" size="xlarge">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                </span>
            </template>
            <template #end>
                <span class="pi pi-sign-out"></span>
            </template>
        </Menu>
    </div>
</template>

<script lang="ts" setup>
import Menu from 'primevue/menu';
import 'primeicons/primeicons.css';
import Avatar from 'primevue/avatar';
import { ref } from "vue";

const items = ref([
    { icon: 'pi pi-comment' },
    { icon: 'pi pi-home' }
]);

</script>

<style lang="scss" scoped>
$primary-color: #f59e0b;

:deep(.p-menu){
    height: 95vh;
    width: 5%;
    background-color: $primary-color;
    border: none;
    min-width: 5rem;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
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
</style>
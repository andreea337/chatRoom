<template>
    <div class="container mx-auto">
        <div class="text-center bg-gray-100 p-5">
            <p class="text-6xl text-red-700">Hello!</p>
            <h1 class="text-4xl text-green-500">Vite + TailwindCSS</h1>
        </div>
        <Card style="width: 100%; overflow: hidden; border-radius: 1.5rem"> 
            <!-- hidden是避免內容超出卡片範圍 -->
            <!-- <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template> -->
            <template #title>Advanced Card</template>
            <template #subtitle>Card subtitle</template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button label="Cancel" severity="secondary" outlined class="w-full mr-4" />
                    <Button label="Save" class="w-full" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import Card from 'primevue/card';
import Button from 'primevue/button';


</script>
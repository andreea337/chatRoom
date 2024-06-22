<template>
    <div class="flex justify-center items-center h-screen">
        <Card class="h-5/6 w-1/3 flex flex-col justify-center items-center p-4" style="overflow: hidden; border-radius: 2rem;"> 
            <template #title>
                <div class="text-center">
                    LOGIN
                </div>
            </template>
            <template #subtitle>
                <div class="text-center">
                    Sign in to your account
                </div>
            </template>
            <template #content>
                    <FloatLabel class="mb-8">
                        <InputText id="username" v-model="username"/>
                        <label for="username">Username</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText id="password" v-model="password"/>
                        <label for="password">Password</label>
                    </FloatLabel>
            </template>
            <template #footer>
                <div>
                    <Button label="Login" class="w-full" @click="onSubmit"/>
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const router = useRouter();
const onSubmit = () => {
    router.push(`/chat?username=${username.value}`);
}

</script>

<style lang="scss" scoped>
:deep(.p-card) {
    .p-card-body {
        height: 100%;
        display: flex;
        flex-direction: column;
        .p-card-caption {
            flex: 1;
        }
        .p-card-content {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: end;
        }
        .p-card-footer {
            flex: 2;
        }
    }
}
</style>
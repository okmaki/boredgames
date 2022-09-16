<script setup lang="ts">
import injectionKeys from '@/injection-keys';
import { inject, ref } from 'vue';

const authenticator = inject(injectionKeys.AUTHENTICATOR);

const displayName = ref('');
const password = ref('');
const isLoginFailed = ref(false);

async function login(): Promise<void> {
    if (!displayName.value || !password.value) {
        isLoginFailed.value = true;
        return;
    }

    const isLoginSuccess = await authenticator?.login(displayName.value, password.value);
    isLoginFailed.value = !isLoginSuccess;
}

</script>

<template>
    <form class="flex flex-col gap-4 rounded shadow-md p-4 w-64 mx-auto box-border">
        <input type="text" placeholder="DisplayName" class="rounded w-full h-8 box-border px-2 border-2"
            :class="{ 'border-red-500': isLoginFailed }" v-model="displayName">
        <input type="password" placeholder="Password" class="rounded w-full h-8 box-border px-2 border-2"
            :class="{ 'border-red-500': isLoginFailed }" v-model="password">
        <button type="button" class="rounded w-full h-8 box-border px-2 bg-emerald-400" @click="login()">LOGIN</button>
    </form>
</template>
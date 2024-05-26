<template>
    <section class="min-h-[calc(100vh*0.80)] w-full flex justify-center mb-12" id="landing-page">
        <div v-if="data" class="flex items-center space-x-0 space-y-7 md:space-y-0 md:space-x-10 flex-col md:flex-row m-auto mt-16">
            <img :class="['w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']" :src="data.viewer.avatarUrl" />
            <div class="flex flex-col space-y-2">
                <p :class="['text-lg lg:text-2xl transition-all motion-reduce:transition-none duration-500 delay-[500ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.intro }}</p>
                <h1 :class="['text-2xl lg:text-4xl font-bold transition-all motion-reduce:transition-none duration-500 delay-[550ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.name }}</h1>
                <p :class="['text-base lg:text-lg text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-[600ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.message }}</p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import { githubInfo } from '../queries/github';
import { useQuery } from '@vue/apollo-composable';

const { result, error } = useQuery(githubInfo, null, { clientId: 'github' });
const data = result;
const props = defineProps({ content: Object, showTransition: Boolean, })
const showIntro = ref(false)
</script>

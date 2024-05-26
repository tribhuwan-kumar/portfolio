<template>
    <section class="md:min-h-[90vh] w-full mt-48 xl:mt-[-20px]" ref="leetcodeSection" id="leetcode-section">
        <div :class="['flex flex-col gap-y-4 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <div class="relative flex items-center text-black dark:text-slate-300" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
                <h1 class="text-2xl lg:text-3xl font-bold pr-5"><a :href="content.profileLink" target="_blank">LeetCode</a></h1>
                <div class="flex-grow border-t border-black dark:border-white border-1"></div>
            </div>
        </div>
        <div class="relative items-center flex ml-6 mt-4 mb-3" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']"> 
            <div class="flex-grow border-t border-black/20 dark:border-white/50 border-1"></div>
            <h2 class="pr-4 pl-4 font-bold">Stats</h2>
            <div class="flex-grow border-t border-black/20 dark:border-white/50 border-1"></div>
        </div>
        <div v-if="darkModeActive">
            <div class="flex items-center justify-center">
                <img :src="content.darkModeleetcode" alt="">
            </div>
        </div>
        <div v-else>
            <div class="flex items-center justify-center">
                <img :src="content.leetcode" alt="Leetcode">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
    content: Object,
    transitions: Object,
    visible: Boolean,
    darkModeActive: Boolean,
});

const leetcodeSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(leetcodeSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true
</script>

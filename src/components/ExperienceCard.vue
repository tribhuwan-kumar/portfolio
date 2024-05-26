<template>
    <div class="flex flex-col flex-1 max-w-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-zinc-950 border border-black/10 rounded-xl dark:border-white/10 text-left p-4 transition-all duration-300">
        <h3 class="text-lg lg:text-xl font-extrabold">{{ experience.position }}</h3>
        <p class="italic text-lg">{{ experience.duration }}</p>
        <ul class="list-['•'] pl-6 pt-4 text-slate-500 dark:text-slate-300 text-base lg:text-lg ">
            <li v-for="bullet in experience.bulletPoints" class="pl-2 pb-2">{{ bullet }}</li>
        </ul>
        <div class="pt-4 flex flex-wrap mt-auto text-slate-500 dark:text-slate-300 text-base lg:text-base italic dark:not-italic">
            <p v-for="hashtag in experience.hashtags" class="pr-4 last:pr-0">#{{ hashtag }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    experience: Object,
})

</script>

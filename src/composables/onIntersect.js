import { ref, onMounted, onUnmounted } from 'vue';

export const onIntersect = (elementToWatch, once = true, options = { threshold: 0.15 }) => {
    const visible = ref(false)
    const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            visible.value = true
            if (once) {
                observer.unobserve(entry.target);
            }
        }
        else {
            visible.value = false
        }
    }, options);

    onMounted(() => observer.observe(elementToWatch.value))
    onUnmounted(() => observer.disconnect())

    return visible;
};

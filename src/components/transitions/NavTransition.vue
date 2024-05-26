<template>
    <TransitionGroup name="dropdown">
        <slot></slot>
    </TransitionGroup>
</template>

<style>
    @media (prefers-reduced-motion: no-preference) {
        .dropdown-enter-active,
        .dropdown-leave-active {
            transition: all 0.3s ease-in;
        }

        .dropdown-enter-from,
        .dropdown-leave-to {
            transform: translateY(-5%);
            opacity: 0;
        }

        .dropdown-enter-to,
        .dropdown-leave-from {
            opacity: 1;
        }
    }
</style>

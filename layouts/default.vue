<template>
    <header class="flex flex-row w-screen px-4 leading-10 h-10 bg-orange-400 text-center">
        <nav class="">
            <ol class="flex space-x-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/scan">Scan</NuxtLink></li>
            </ol>
        </nav>    
    </header>
    <main class="m-8 flex-grow">
        <slot />
    </main>
    <footer class="w-screen leading-10 h-10 bg-slate-500 text-center text-white">version #123 fresh off the press!</footer>
</template>



<script>
    import { page } from "$app/stores";

    let aClass = "flex h-full items-center p-4 m-4 transition-colors hover:border-b-2 hover:border-b-primary-500 hover:text-surface-500 hover:bg-primary-900"

</script>
<header class="bg-background p-4 flex justify-center">
    <nav class="flex justify-center">
        <ul class="relative p-0 m-0 flex justify-center items-center bg-contain h-8 list-none">
            <li>
                <a class={aClass} href="/">home</a>
            </li>
            <li>
                <a class={aClass} href="/about">about</a>
            </li>
            <li>
                <a class={aClass} href="/projects">projects</a>
            </li>
            <li>
                <a class={aClass} href="/contact">contact</a>
            </li>
        </ul>
    </nav>
</header>
  
<style lange="postcss">

</style>
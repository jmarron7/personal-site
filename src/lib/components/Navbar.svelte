<script>
	import NavbarItem from "./NavbarItem.svelte";

    const routes = ["home", "about", "projects", "contact"]
</script>
<header class="bg-background p-4 flex justify-center">
    <nav class="flex justify-center">
        <div class="relative p-0 m-0 flex justify-center items-center bg-contain h-8 ">
            {#each routes as route}
                <NavbarItem route={route}/>
            {/each}
        </div>
    </nav>
</header>
  
<style>

</style>
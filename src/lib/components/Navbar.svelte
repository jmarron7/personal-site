<script>
	import { page } from '$app/stores';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	let aClass = 'flex h-full items-center p-4 m-4 transition-colors hover:text-primary-500 ';
</script>

<header class="p-4 flex justify-center z-[999]">
	<nav
		class="flex justify-center bg-surface-500 rounded-full outline outline-1 outline-surface-300 fixed"
	>
		<ul class="relative p-0 m-0 flex justify-center items-center bg-contain h-8 list-none">
			<li>
				<a class={aClass} href="/">home</a>
			</li>
			<li>
				<a class={aClass} href="#about">about</a>
			</li>
			<li>
				<a class={aClass} href="#projects">projects</a>
			</li>
			<li>
				<a class={aClass} href="#contact">contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lange="postcss">
</style>

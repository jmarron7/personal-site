<script>
	import About from '$lib/components/About.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';

	import { onMount, onDestroy } from 'svelte';

	let userData = {};

	const fetchUserData = async () => {
		const response = await fetch('https://api.github.com/users/jmarron7');
		if (response.ok) {
			userData = await response.json();
		} else {
			console.error('Failed to fetch user data');
		}
	};

	onMount(() => {
		fetchUserData();
	});

	onDestroy(() => {
		// Clean up if needed
	});
</script>

<svelte:head>
	<title>Jesus Marron | Fullstack Software Engineer</title>
	<meta
		name="description"
		content="Jesus is a Fullstack Software Engineer based in Memphis, TN. Read more about me and the services I can help you with."
	/>
</svelte:head>

<Hero {userData} />
<About />
<Projects />

<style>
</style>

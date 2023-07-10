<script lang="ts">
	import ProfilePic from './ProfilePic.svelte';
	import PixelBanner from './PixelBanner.svelte';

	export let userData: any;

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};
</script>

<div id="home" class="w-full h-full">
	<PixelBanner />
	<section class="hero flex flex-col justify-center items-center md:flex-row-2">
		<div class=" max-w-6xl pt-4 pb-4 pr-4 basis-3/4">
			<h2 class="text-6xl">
				<strong class="bg-primary-500 text-surface-500">Hi, I'm Jesus.</strong> I'm a fullstack software
				engineer.
			</h2>
			<p class="pt-4 text-xl">{userData.bio}</p>
		</div>
		<div class="p-4 basis-1/4">
			<ProfilePic profile_pic={userData.avatar_url} />
		</div>
		<button
			type="button"
			on:click={() => scrollToSection('about')}
			class="btn btn-xl variant-filled-primary m-4">Read More</button
		>
	</section>
</div>

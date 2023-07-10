<script lang="ts">
	import type { Project } from '../../utils/projectData';

	import GameGuildImg from '$lib/assets/gameguild.png';
	import PixlImg from '$lib/assets/gopixl.png';
	import MGrepImg from '$lib/assets/mgrep.png';
	import ETLProjectImg from '$lib/assets/etlproject.png';

	export let project: Project;
	let demo_url = project.demo_url;
</script>

<div
	class="card shadow-l w-[300px] bg-surface-900 text-surface-50 card-hover hover:outline hover:outline-2 hover:outline-secondary-500"
>
	<header>
		{#if project.name === 'Game Guild'}
			<img
				src={GameGuildImg}
				width="300"
				height="145"
				class="bg-black/50 w-full aspect-[21/9] rounded-t-3xl"
				alt="Game Guild Project"
			/>
		{:else if project.name === 'Pixl'}
			<img
				src={PixlImg}
				class="bg-black/50 w-full h-auto aspect-[21/9] rounded-t-3xl"
				alt="Pixl Project"
			/>
		{:else if project.name === 'Serverless Spotify ETL Pipeline'}
			<img
				src={ETLProjectImg}
				class="bg-black/50 w-full h-auto aspect-[21/9] rounded-t-3xl"
				alt="Serverless Spotify ETL Pipeline Project"
			/>
		{:else if project.name === 'Multithreaded Grep Tool'}
			<img
				src={MGrepImg}
				class="bg-black/50 w-full h-auto aspect-[21/9] rounded-t-3xl"
				alt="Multithreaded Grep Tool Project"
			/>
		{:else}
			<img
				src=""
				class="bg-black/50 w-full h-auto aspect-[21/9] rounded-t-3xl placeholder"
				alt="Unable to load"
			/>
		{/if}
	</header>
	<div class="p-4 space-y-4">
		<h3 class="h3">{project.name}</h3>
		<article>
			<p>
				{project.description}
			</p>
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-end items-center space-x-4">
		<a href={project.repo_url} target="_blank" class="btn btn-lg variant-ghost-primary">GitHub</a>
		{#if demo_url}
			<a href={demo_url} target="_blank" class="btn btn-lg variant-ghost-tertiary">Demo</a>
		{/if}
	</footer>
</div>

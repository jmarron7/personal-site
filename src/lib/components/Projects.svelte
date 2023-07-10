<script lang="ts">
	import PageTag from './PageTag.svelte';
	import ProjectCard from './ProjectCard.svelte';

	import { projectData } from '../../utils/projectData';
</script>

<PageTag tag="things i've made" />
<div id="projects" class="h-full w-full bg-gradient-to-b from-primary-500 to bg-secondary-500">
	<div class="grid grid-cols-1 md:grid-cols-2 p-10 justify-center align-middle">
		{#each projectData as project}
			<ProjectCard {project} />
		{/each}
	</div>

	<div />
</div>

<style lang="postcss">
</style>

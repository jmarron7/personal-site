<script lang="ts">
	export let tag: string;
</script>

<h3 class="justify-center items-center pb-4 pt-4 text-2xl">
	<span class="gradient-heading">[ {tag} ]</span>
</h3>

<style lang="postcss">
	.gradient-heading {
		@apply bg-clip-text text-transparent box-decoration-clone;
		@apply bg-gradient-to-r;
		@apply from-primary-500 via-tertiary-500 to-secondary-500;
	}
</style>

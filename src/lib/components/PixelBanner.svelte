<script lang="ts">
	import { beforeUpdate } from 'svelte';

	let squares: any = [];
	const colors = ['bg-primary-500', 'bg-secondary-500', 'bg-tertiary-500', 'bg-surface-300'];

	const generateSquares = () => {
		squares = Array.from({ length: 30 }, () => ({
			size: Math.floor(Math.random() * 2) + 0.5,
			color: colors[Math.floor(Math.random() * colors.length)],
			position: {
				left: Math.floor(Math.random() * 100) + '%',
				top: Math.floor(Math.random() * 100) + '%'
			}
		}));
	};

	beforeUpdate(() => {
		generateSquares();
	});
</script>

<div class="banner">
	{#each squares as square}
		<div
			class="square {square.color} "
			style="
          width: {square.size}rem;
          height: {square.size}rem;
          left: {square.position.left};
          top: {square.position.top};
        "
		/>
	{/each}
</div>

<style lang="postcss">
	.banner {
		position: relative;
		height: 2.5rem;
		width: 100%;
		max-width: 100vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		left: 0;
		margin: 30px 0px 30px 0px;
		z-index: -100;
	}

	.square {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
</style>

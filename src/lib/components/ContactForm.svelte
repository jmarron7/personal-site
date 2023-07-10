<script lang="ts">
	import PageTag from './PageTag.svelte';

	let submissionStatus = '';
	const handleSubmit = async (event: Event) => {
		submissionStatus = 'submitting';

		const form = event.target as HTMLFormElement;
		const form_data = new FormData(form);
		const data = Object.fromEntries(form_data);

		const res = await fetch('/submit-form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const { message } = await res.json();
		submissionStatus = message;
	};
</script>

<PageTag tag="get in touch" />
{#if submissionStatus === 'submitting'}
	<p>Submitting...</p>
{:else if submissionStatus === 'failed'}
	<p>Submission failed.</p>
{:else if submissionStatus === 'success'}
	<p>Submission success.</p>
{:else}
	<!-- form goes here! -->
	<form on:submit|preventDefault={handleSubmit} class="text-surface-50">
		<label for="name" class="label">
			<span>Your name:</span>
		</label>
		<input
			type="text"
			name="name"
			aria-label="name"
			placeholder="What should I call you?"
			required
		/>
		<label for="email" class="label">
			<span>Your email:</span>
		</label>
		<input
			type="email"
			name="email"
			aria-label="email"
			placeholder="Where can I send my response?"
			required
		/>
		<label for="message" class="label">
			<span>Message:</span>
		</label>
		<textarea
			name="message"
			aria-label="message"
			placeholder="What would you like to talk about?"
			rows="3"
			class="textarea"
			required
		/>
		<input type="submit" />
	</form>
{/if}

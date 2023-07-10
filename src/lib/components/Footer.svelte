<footer id="contact" class="flex flex-row justify-center items-center p-8 sm:px-0 bg-secondary-500">
	<form>
		<label for="name">
			<span>Name</span>
		</label>
		<input type="text" name="name" aria-label="name" placeholder="Enter your name" required />
		<label for="email">
			<span>Email</span>
		</label>
		<input type="email" name="email" aria-label="email" placeholder="bill@hotmail.com" required />
		<label for="message">
			<span>Message</span>
		</label>
		<textarea name="message" aria-label="name" placeholder="Message" required rows="3" />
		<input type="submit" />
	</form>
	<p>
		All rights reserved © Jesus Marron {new Date().getFullYear()}
	</p>
</footer>

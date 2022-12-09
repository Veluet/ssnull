<div class="display-flex justify-content-center col-margin-8">
	<div>
		<div>
			<div
				class="background-magenta-50 text-white-50 padding-1 padding-left-2 padding-right-2 border-radius-top-left border-radius-top-right"
			>
				Using Helper Classes
			</div>
			<div
				class="border-magenta-50 border-radius-bottom-left border-radius-bottom-right padding-2 padding-bottom-4 background-gray-400 row-margin-4"
			>
				<div>
					<label class="display-block">Name</label>
					<input type="text" class="background-gray-500 border-gray-50 border-radius padding-1" />
				</div>
				<div>
					<label class="display-block">Summary</label>
					<input type="text" class="background-gray-500 border-gray-50 border-radius padding-1" />
				</div>
			</div>
		</div>
	</div>
	<div>
		<div class="example-card">
			<div class="example-card-header">Using CSS Only</div>
			<div class="example-card-body">
				<div>
					<label class="example-card-label">Name</label>
					<input type="text" class="example-card-input" />
				</div>
				<div>
					<label class="example-card-label">Summary</label>
					<input type="text" class="example-card-input" />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.example-card {
		.example-card-header {
			background: var(--magenta-50);
			border-top-left-radius: var(--border-radius);
			border-top-right-radius: var(--border-radius);
			padding: 0.25rem 0.5rem;
			color: var(--white-50);
		}
		.example-card-body {
			background: var(--gray-400);
			border: 1px solid var(--magenta-50);
			border-bottom-left-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
			padding: 0.5rem 0.5rem 1rem;
		}
		.example-card-body > div {
			margin-bottom: 0.5rem;
		}
		.example-card-body > div:last-child {
			margin-bottom: 0;
		}
		.example-card-label,
		.example-card-input {
			display: block;
		}
		.example-card-input {
			border-radius: var(--border-radius);
			border: 1px solid var(--gray-75);
			padding: 0.25rem;
		}
	}
</style>

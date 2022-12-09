<div class="main">
	<div class="header">
		Header
	</div>

	<div class="left-sidebar">
		A
	</div>

	<div class="content">
		B
	</div>

	<div class="right-sidebar">
		C
	</div>

	<div class="footer">
		Footer
	</div>
</div>

<style>
	.main {
		display: grid;

		grid-template-areas:
			'header header header'
			'left-sidebar content right-sidebar'
			'footer footer footer';

		grid-template-columns: 1fr 4fr 1fr;
		grid-template-rows: auto 1fr auto;
		grid-gap: 10px;

		height: 100vh;
	}
	.header {
		grid-area: header;
	}

	.left-sidebar {
		grid-area: left-sidebar;
		margin-left: 0.5rem;
	}

	.content {
		grid-area: content;
	}

	.right-sidebar {
		grid-area: right-sidebar;
		margin-right: 0.5rem;
	}

	.footer {
		grid-area: footer;
	}
</style>

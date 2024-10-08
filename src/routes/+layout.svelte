<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	import '../app.css';
</script>

<svelte:head>
	<title>Agrarium - Cultivating Wealth Through Tokenized Farmland</title>
</svelte:head>

<Header />
<slot></slot>
<Footer />

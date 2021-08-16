<template>
	<div>
		<h2>{{ name | Ucase }}</h2>

		<h2>{{ amount | CurrencyConverter }}</h2>
	</div>
</template>
<script>
export default {
	name: 'MyFilter',
	data() {
		return { name: 'Filter', amount: 100 };
	}
};
</script>

<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the languages I have worked with ',
			clients: [
				{
					id: 1,
					title: 'Amazon',
					img: require('@/assets/images/brands/Java_programming_language_logo.png'),
				},
				{
					id: 2,
					title: 'Sony',
					img: require('@/assets/images/brands/Javascript.png'),
				},
				{
					id: 3,
					title: 'Adidas',
					img: require('@/assets/images/brands/Clanguage.png'),
				},
				{
					id: 4,
					title: 'FILA',
					img: require('@/assets/images/brands/Vue.png'),
				},
				{
					id: 5,
					title: 'NB',
					img: require('@/assets/images/brands/python.png'),
				},
				{
					id: 6,
					title: 'SAMSUNG',
					img: require('@/assets/images/brands/HTML.png'),
				},
				{
					id: 7,
					title: 'CANON',
					img: require('@/assets/images/brands/CSS.png'),
				},
				{
					id: 7,
					title: 'PUMA',
					img: require('@/assets/images/brands/SQL.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>

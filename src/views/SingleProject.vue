<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
		
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'My Projects',
				singleProjectDate: 'Jul 26, 2021',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/ui-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/web-project-2.png'),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Mohamed Manssour',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Full-Stack Development',
					},
					{
						id: 4,
						title: 'Phone',
						details: '(+1) 647-866-8336',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'My projects are meticulously crafted to achieve specific objectives, with a focus on intuitive user interfaces that enhance user experience. They are designed to not only be user-friendly but also to captivate users with enticing features, ensuring engagement and satisfaction.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Vue.js',
							'TailwindCSS',
							'Java',
							'Arduino',
							'AdobeXD',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Whack-A-Error Project: Utilized confirm and prompt dialogues to offer players the option to enter their scores into a leaderboard. Managed score storage and display using JavaScripts local storage and DOM manipulation. Administered a script for real-time scoring, incrementing score for each successful player whack. https://github.com/MohamedManssour/Whack-A-Error',
					},
					{
						id: 2,
						details:
							'Chess Vs. AI Project: Constructed a basic-level chess AI employing a function for random legal moves, and intermediate and advanced levels using the minimax algorithm with a recursive function for exploring and evaluating moves at various depths. Developed a dynamic game system that effortlessly transitions between three modes. Designed a Chess Challenge Mode with adaptive puzzle scenarios, utilizing a custom puzzle engine for dynamic difficulty adjustment and a responsive UI https://github.com/MohamedManssour/Chess-Game-Vs-AI',
					},
					{
						id: 3,
						details:
							'Automated Plant Watering System Project: Designed and implemented an automated plant hydration system, utilizing Arduino microcontrollers and Java programming, which effectively increased crop yield by 30% and reduced water consumption by 40%. Integrated remote monitoring and control capabilities, allowing for real-time modifications to irrigation schedules. https://github.com/MohamedManssour/Automated-Plant-Watering-System-',
					},
					
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>

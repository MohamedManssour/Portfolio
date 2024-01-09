<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Welcome! I am an aspiring full-stack software developer with a deep passion for technology and innovation. Currently advancing my studies at York University, I am pursuing a B.A. in Information Technology, where I am immersing myself in a wide range of programming languages and frameworks. My educational journey has equipped me with expertise in languages such as C#, Python, Java, and JavaScript, and I am proficient in utilizing cutting-edge frameworks like React.js and Node.js.',
				},
				{
					id: 2,
					bio:
						'My technical skills extend beyond coding, encompassing tools like Git, GitHub, MongoDB, and MySQL, enabling me to navigate the complexities of modern software development environments effectively. I am also skilled in web technologies like HTML5, CSS3, and SCSS, which allows me to create responsive and visually appealing web interfaces. I am constantly exploring new technologies and techniques to expand my skill set. My goal is to harness the power of programming to develop innovative solutions that address real-world challenges. I am committed to a path of continuous learning and growth, aiming to make significant contributions to the field of software development and leave a mark in the tech world.',

				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>

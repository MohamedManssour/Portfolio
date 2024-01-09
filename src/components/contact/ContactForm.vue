<template>
  <div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
      <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
        Contact Form
      </p>
      <form @submit.prevent="submitForm" class="font-general-regular space-y-7">
        <FormInput label="Full Name" inputIdentifier="name" v-model="formData.name" />
        <FormInput label="Email" inputIdentifier="email" inputType="email" v-model="formData.email" />
        <FormInput label="Subject" inputIdentifier="subject" v-model="formData.subject" />
        <FormTextarea label="Message" textareaIdentifier="message" v-model="formData.message" />

        <div>
          <Button
            title="Send Message"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';

export default {
  components: { Button, FormInput, FormTextarea },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/contact', this.formData);
        console.log(response.data);
        alert('Message sent successfully');
      } catch (error) {
        console.error(error);
        alert('Failed to send message, please try again');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* Add your styling here */
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  let api;

  let competitionType = '';
  let files: FileList;
  let description = '';

  onMount(() => {
    AOS.init();
    AOS.refresh();
    const urlParams = new URLSearchParams(window.location.search);
    competitionType = urlParams.get('competition') || 'art';
  });

  async function handleSubmit() {
    if (!files.length || !description) return;

    const formData = new FormData();
    Array.prototype.forEach.call(files, file => formData.append('files', file));
    formData.append('description', description);
    formData.append('competitionType', competitionType);

    try {
      await submitEntry(formData);
      alert('Entry submitted successfully');
    } catch (error) {
      alert('Error submitting entry');
    }
  }
</script>

<h1
  class="font-syne font-bold w-full text-center text-3xl sm:text-4xl md:text-5xl mb-10 mt-3 dark:text-white"
  data-aos="fade-up"
>
  Submit Your {competitionType.charAt(0).toUpperCase()+competitionType.slice(1)} Entry
</h1>

<div class="px-10 py-5" data-aos="fade-up" data-aos-delay="50">
  <form
    class="flex flex-col items-center w-full max-w-lg mx-auto dark:text-grey-300 rounded-sm p-3 border-[3px]"
    on:submit|preventDefault={handleSubmit}
  >
    <label for="file" class="w-full text-center mb-4">Select Your {competitionType === 'art' ? 'Image/Video' : 'MP3'} Files:</label>
    <input type="file" id="file" name="file" bind:files={files} accept={competitionType === 'art' ? 'image/*,video/*' : 'audio/mpeg'} class="mb-4" multiple required />

    <label for="description" class="w-full text-center mb-4">Brief Description:</label>
    <textarea
      id="description"
      name="description"
      rows="4"
      bind:value={description}
      class="w-full mb-4 p-2 border border-primary-800 dark:border-grey-300 rounded-sm dark:bg-black dark:bg-opacity-[0.15] dark:text-grey-300"
      required
    ></textarea>

    <button
      type="submit"
      class="text-center text-primary-100 text-2xl font-syne p-2 bg-primary-700 hover:bg-primary-800 dark:bg-primary-800 dark:hover:bg-primary-900"
    >
      Submit Entry
    </button>
  </form>
</div>
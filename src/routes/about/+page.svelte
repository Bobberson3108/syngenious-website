<script lang="ts">
    import { onMount } from 'svelte';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    import InteractiveName from '$lib/components/InteractiveName.svelte';
    import Values from '$lib/components/Values.svelte';

    onMount(() => {
        AOS.init();
        AOS.refresh();
    });
</script>

<h1 class="font-syne font-bold w-full text-center text-3xl sm:text-4xl md:text-5xl mt-3 mb-16 dark:text-white" data-aos="fade-up">About</h1>

<h2 id="what-is-syngenious" data-aos="fade-up">What is Syngenious?</h2>

<div class="flex justify-center">
  <p data-aos="fade-up" class="max-w-6xl mt-5 text-center">Syngenious is a not-for-profit, democratic, digital platform designed for young individuals to explore their passions, collaborate on groundbreaking projects, and connect with like-minded peers. By cultivating a unique and passionate community, and offering abundant opportunities and resources, Syngenious aims to empower young people to take control of their futures, in contrast to outdated education systems that often stifle creativity and innovation.</p>
</div>

<h2 id="our-values" class="centered-h2">Our Values</h2>
<div class="md:min-h-[700px] lg:min-h-[800px] xl:min-h-[1000px]">
    <Values/>
</div>

<!-- What we offer -->
<h2 data-aos="fade-up" class="font-bold text-2xl sm:text-3xl md:text-4xl pb-8 pl-4 dark:text-white mt-12">What we offer</h2>
<div class="grid md:grid-cols-2 gap-8 mx-4" data-aos="fade-up">
  <div>
    <h3 class="font-semibold text-xl font-syne">Community</h3>
    <p>Syngenious boasts a vibrant community of young creatives, academics and innovators, offering opportunities to connect with like-minded individuals, share ideas and engage in meaningful discussions.</p>
  </div>
  <div>
    <h3 class="font-semibold text-xl font-syne">Projects</h3>
    <p>Syngenious serves as a hub where members can initiate, join, and collaborate on a range of projects that align with their interests and passions, combining their unique skills and perspectives to accomplish far more than they could individually.</p>
  </div>
  <div>
    <h3 class="font-semibold text-xl font-syne">Competitions</h3>
    <p>We host various competitions and challenges, offering members a chance to showcase their skills, challenge themselves, and earn recognition for their outstanding work.</p>
  </div>
  <div>
    <h3 class="font-semibold text-xl font-syne">Showcase</h3>
    <p>Syngenious provides a platform where members can display their work, gain visibility, and benefit from the constructive feedback of the community. This supportive environment helps members refine their skills, expand their horizons, and reach their full potential.</p>
  </div>
</div>

<!-- What we're working on -->
<h2 data-aos="fade-up" class="font-bold text-2xl sm:text-3xl md:text-4xl text-center py-8 dark:text-white mt-12">What we're working on</h2>
<div class="grid md:grid-cols-2 gap-8 mx-4 p-4" data-aos="fade-up">
  <div>
    <h3 class="font-semibold text-xl font-syne">Portfolios</h3>
    <p>Developing personal portfolio pages for our members to showcase their unique skills, interests and accomplishments.</p>
  </div>
  <div>
    <h3 class="font-semibold text-xl font-syne">Integrated projects platform</h3>
    <p>Creating a unified platform for project collaboration.</p>
  </div>
  <div>
    <h3 class="font-semibold text-xl font-syne">Events/courses</h3>
    <p>Organising engaging events and courses covering a wide range of topics.</p>
  </div>
  <div>
    <h3 class="font-semibold text-xl font-syne">Forum</h3>
    <p>Creating a dynamic digital space allowing members to showcase their work, seek feedback, request help, and "fork" other people's work.</p>
  </div>
</div>

<h2 id="get-involved" data-aos="fade-up" class="font-bold text-2xl sm:text-3xl md:text-4xl text-center py-8 dark:text-white mt-12">Get involved</h2>
<div class="p-4">
  <p data-aos="fade-up" class="md:mr-6">
    Syngenious is run democratically and entirely by its members. If you would like to be a part of our organisation, we could really use your help. We hold meetings every Wednesday at 19:30 GMT on our <a class="text-primary-700 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-400 underline" href="https://discord.gg/Cz95wV44nA" target="_blank" rel="noopener noreferrer">Discord server</a>. We'd be thrilled if you could join us to see how you can get involved, share your thoughts and ideas, and help us shape the future of our community. Our meetings are open to everyone, so don't be afraid to drop by and say hello!
  </p>

  <p data-aos="fade-up">At Syngenious, we believe that every individual has unique talents and perspectives to contribute. Whether you can only spare half an hour to drop by in our weekly meetings, or are looking for a more active role, there's a place for you here. Our teams cover various aspects of our organization, and you can join one or more based on your interests. Each team meets once every two weeks, allowing you to contribute as much or as little as you like.</p>

  <p data-aos="fade-up" class="list-p">You can also apply to become a governing member. As a member of Syngenious, you will:</p>
  <div class="flex items-center flex-col md:flex-row">
    <ul class="ml-5 list-disc flex-1" data-aos="fade-up">
      <li>Have an equal vote in decision-making processes</li>
      <li>Attend meetings to contribute ideas and offer opinions</li>
      <li>Take on a variety of roles based on your skills and interests, such as project coordination, event planning, or content creation</li>
    </ul>
    <div class="flex justify-center flex-1"><a class="font-syne py-2 text-xl md:text-2xl font-bold bg-primary-700 hover:bg-primary-800 text-white px-4 rounded max-w-xs" href="https://forms.gle/q49ge9bwCTpmXUgV7" target="_blank">Apply here to become a member</a></div>
  </div>
 
  <p data-aos="fade-up" class="list-p mt-10 md:mt-4">Additionally, you can join one or more of the following teams:</p>
  <ul class="space-y-2">
    <li data-aos="fade-up" class="list-p"><span class="font-bold text-xl font-syne">Marketing/Design Team:</span>
      <div class="flex items-center mb-4 flex-col md:flex-row">
          <ul class="ml-5 list-disc flex-1 h-full w-full" data-aos="fade-up">
            <li>Help with social media management and promotion</li>
            <li>Contribute to website design and user experience improvements</li>
            <li>Develop eye-catching graphics and visuals to enhance our brand</li>
          </ul>
        <div class="flex justify-center flex-1"><a class="font-syne py-2 text-xl md:text-2xl font-bold bg-primary-700 hover:bg-primary-800 text-white px-4 rounded max-w-xs" href="<marketing_google_forms_link>" target="_blank">Apply here to join the Marketing/Design Team</a></div>
      </div>
    </li>

    <li data-aos="fade-up" class="list-p"><span class="font-syne font-bold text-xl">Programming Team</span>
      <div class="flex items-center mb-4 flex-col md:flex-row">
          <ul class="ml-5 list-disc flex-1" data-aos="fade-up">
            <li>Assist with website development, including frontend, backend, and database tasks</li>
            <li>Contribute to the development and maintenance of our Discord bot</li>
            <li>Lead or provide support for any other programming projects as needed</li>
          </ul>

        <div class="flex justify-center flex-1"><a class="font-syne py-2 text-xl md:text-2xl font-bold bg-primary-700 hover:bg-primary-800 text-white px-4 rounded max-w-xs" href="<programming_forms_link>" target="_blank">Apply here to join the Programming Team</a></div>
      </div>
    </li>

  <p data-aos="fade-up" data-aos-offset="0">If you have any questions or would like to learn more, feel free to contact us at <a class="text-primary-700 dark:text-primary-300 underline hover:text-primary-900 dark:hover:text-primary-400" href="mailto:syngenious1@gmail.com">syngenious1@gmail.com</a> or through our <a class="text-primary-700 dark:text-primary-300 underline hover:text-primary-900 dark:hover:text-primary-400" href="https://discord.gg/Cz95wV44nA" target="_blank" rel="noopener noreferrer">Discord server</a>.</p>
</div>

<style lang="postcss">
  h2 {
      @apply px-0 mx-0 text-center font-syne font-bold text-2xl sm:text-3xl md:text-4xl dark:text-white;
  }

  p, ul {
      @apply font-quattrocento text-lg pl-4 dark:text-white;
  }

  p:not(.list-p), ul {
    @apply pb-8;
  }

  p.list-p {
    @apply pb-1;
  }
</style>

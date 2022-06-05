import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
   {
      id: 'm1',
      title: 'A first Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/London_Bridge_from_St_Olaf_Stairs.jpg/1024px-London_Bridge_from_St_Olaf_Stairs.jpg',
      address: 'River Thames, Central London',
      description: 'This is our first meetup',
   },
   {
      id: 'm2',
      title: 'Second Meetup at Lodi Gardens',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Lodi_Gardens_is_popular_for_exercise_and_walking_enthusiasts.jpg/1024px-Lodi_Gardens_is_popular_for_exercise_and_walking_enthusiasts.jpg',
      address: 'New Delhi, Delhi, India',
      description:
         'The beautiful Lodi Gardens in central Delhi was our 2nd meetup',
   },
];

function HomePage() {
   return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;

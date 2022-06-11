// our-domain.com/new-meetup
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react/cjs/react.production.min';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
   const router = useRouter();

   async function addMeetupHandler(enteredMeetupData) {
      const response = await fetch('/api/new-meetup', {
         method: 'POST',
         body: JSON.stringify(enteredMeetupData),
         headers: {
            'Content-Type': 'application/json'
         }
      });

      const data = await response.json();
      console.log(data);

      // use router.replace() so that user can't go back 
      router.push('/')
   }

   return (
      <Fragment>
         <Head>
            <title>Add a New Meetup</title>
            <meta name='description' content="Add your own meetups and create amazing networking opportunities." />
         </Head>
         <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Fragment>
   );
}

export default NewMeetupPage;

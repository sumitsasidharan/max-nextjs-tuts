import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

import DUMMY_MEETUPS from '../utils/data';
import { Fragment } from 'react/cjs/react.production.min';

function HomePage(props) {
   
   return (
      <Fragment>
         <Head>
            <title>React Meetups</title>
            <meta name='description' content='browse a luge list of hightly active React meetups' />
         </Head>
         <MeetupList meetups={props.meetups} />
      </Fragment>
   );
}

// export async function getServerSideProps() {
//    return {
//       props: {
//          meetups: DUMMY_MEETUPS
//       }
//    }
// }

export async function getStaticProps() {
   const client = await MongoClient.connect(process.env.MONGO_URI);
   const db = client.db();

   const meetupsCollection = db.collection('meetups');
   const meetups = await meetupsCollection.find().toArray();

   client.close();
   
   return {
      props: {
         meetups: meetups.map(meetup => ({
            title: meetup.title,
            address: meetup.address,
            image: meetup.image,
            description: meetup.description,
            id: meetup._id.toString()
         })),
      },
      revalidate: 10,
   };
}

export default HomePage;

import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

import DUMMY_MEETUPS from '../utils/data';

function HomePage(props) {
   
   return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
   return {
      props: {
         meetups: DUMMY_MEETUPS
      }
   }
}

export default HomePage;

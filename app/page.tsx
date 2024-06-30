import React from 'react';
import MicrophoneComponent from './components/RecordingView';

const Home = () => {
  return (
    <div className='flex items-center justify-center bg-gray-100 '>
      <MicrophoneComponent/>
    </div>
  );
}

export default Home;

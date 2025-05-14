// memories.js
import personImage from '../images/Subject-2.png';
import instagramIcon from '../images/Subject-3.png';
import graduation from '../images/icons8-spring-boot-96.png';
// Import Lottie animations if available
import celebrationAnimation from '../animations/Animation - 1746978299430.json';

const memories = [
  {
    title: '6th Grade',
    description: 'When I first met the confident girl named Namrata.',
    image: personImage,
    //framer motion animate element coming from right and left
    animation: {
      initial: { x: -600 },
      animate: { x: 0 },
      transition: { duration: 1 },
    }
  },
  {
    title: 'Post-6th Grade',
    description: 'I thought our story ended here...',
    image: null,
    //framer motion animate element coming from right and left
    animation: {
      initial: { x: 600 },
      animate: { x: 0 },
      transition: { duration: 1 , delay: 1.5 },
    }
  },
  {
    title: '10-11 months ago',
    description: 'And suddenly... you were back.',
    image: instagramIcon,
    //framer motion animate element coming from right and left
    animation: {
      initial: { x: -600 },
      animate: { x: 0 },
      transition: { duration: 1, delay: 2.9  },
    }
  },
  {
    title: 'Now',
    description: 'Hours of Nonsense convos and logicless chats...',
    image: null,
    //framer motion animate element coming from right and left
    animation: {
      initial: { x: 600 },
      animate: { x: 0 },
      transition: { duration: 1, delay: 4.1,
       },
    }
  },
  // Add more memories as desired
];

export default memories;

import { useState, useEffect, useRef } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { scroller } from 'react-scroll';
import alanBtn from '@alan-ai/alan-sdk-web';

import Navbar from './Navbar';
import Faq from './Faq';

const App = () => {
  const [index, setIndex] = useState(null);
  const [toggleColorFlag, setToggleColorFlag] = useState(false);
  const alanBtnInstance = useRef(null);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          '3a6d2aedc4370507b399c16a1daa39162e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: commandData => {
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-item-${commandData.id}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
            });
            setIndex(commandData.faqId - 1);
          } else if (commandData.command === 'toggleColorMode') {
            setToggleColorFlag(flag => !flag);
          }
        },
      });
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleColorFlag={toggleColorFlag} />
      <Faq index={index} setIndex={setIndex} />
    </ChakraProvider>
  );
};

export default App;

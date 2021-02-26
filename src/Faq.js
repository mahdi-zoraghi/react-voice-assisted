import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import faqList from './faq.json';

const Faq = ({ index, setIndex }) => {
  return (
    <Flex flexDirection="column" p="4">
      <Box mb="8">
        <Heading size="md">Frequently Asked Questions</Heading>
      </Box>
      <Accordion allowToggle index={index}>
        {faqList.map(faq => (
          <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
            <AccordionButton onClick={() => setIndex(faq.id - 1)}>
              <Box flex="1" textAlign="left">
                <Text fontWeight="semibold">{faq.question}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb="4">{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default Faq;

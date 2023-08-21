import React from 'react';
import {
  Box,
  Container,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { RiCalendarEventFill } from 'react-icons/ri';

import expenses from '../_data/expenses';

interface ExpenseItemProps {
  item: string;
  cost: number;
  date: Date;
}

interface ExpenseDateProps {
  date: Date;
}

const Expenses: React.FC = () => (
  <Box>
    <Container>
      <Heading my='2rem'>Expenses</Heading>
      <Stack gap='3rem'>
        {expenses.map((expense, i) => (
          <ExpenseItem
            key={i}
            item={expense.item}
            cost={expense.cost}
            date={expense.date}
          />
        ))}
      </Stack>
    </Container>
  </Box>
);

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item, cost, date }) => (
  <Box>
      <Box
        bg='bg.surface'
        px={{ base: '4', md: '6' }}
        py='5'
        boxShadow='sm'
      borderRadius='lg'
      w='540px'
      >
        <HStack>
          <ExpenseDate date={date} />
          <Stack pl='1rem' spacing='1'>
            <Text textStyle='lg' fontWeight='medium'>
              {item}
            </Text>
            <Text textStyle='sm' color='fg.muted'>
              ${cost}
            </Text>
          </Stack>
        </HStack>
      </Box>
  </Box>
);

const ExpenseDate: React.FC<ExpenseDateProps> = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <Stack spacing='4' p='6' bg={useColorModeValue('gray.50', 'gray.700')}>
      <HStack spacing='3' w='240px'>
        <Icon as={RiCalendarEventFill} fontSize='xl' />
        <Text>{month}</Text>
        <Text>{day}</Text>
        <Text>{year}</Text>
      </HStack>
    </Stack>
  );
};

export default Expenses;

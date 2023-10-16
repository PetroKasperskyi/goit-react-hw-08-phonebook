import React, {useEffect} from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from '../redux/operations';
import {
  Wrapper,
  Container,
  TitlePhoneBook,
  TitleContacts,
} from './App.styled';




export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm />
      </Container>

      <Container>
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
        <GlobalStyle />
      </Container>
    </Wrapper>
  );
};





// (
//   <Wrapper>
//     <Container>
//       <TitlePhoneBook>Phonebook</TitlePhoneBook>
//       <ContactForm />
//     </Container>

//     <Container>
//       <TitleContacts>Contacts</TitleContacts>
//       <Filter />
//       <ContactList />
//       <GlobalStyle />
//     </Container>
//   </Wrapper>
// );
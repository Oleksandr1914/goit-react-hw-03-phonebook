import React from 'react';
import PropTypes from 'prop-types';
import { BlockItem, BtnDelete, SpanName } from './ContactListStyled';

const ContactsList = ({ onContact, onClickBtn }) => {
  return (
    <ul>
      {onContact.contacts
        .filter(el => el.name.toLowerCase().includes(onContact.filter))
        .map(el => (
          <BlockItem key={el.id}>
            <li>
              <SpanName>{el.name}: </SpanName>
              <SpanName>{el.number}</SpanName>
            </li>
            <BtnDelete
              type="click"
              name={el.id}
              onClick={() => onClickBtn(el.id)}
            >
              Delete
            </BtnDelete>
          </BlockItem>
        ))}
    </ul>
  );
};
ContactsList.propTypes = {
  onContact: PropTypes.object.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};

export default ContactsList;

import React from 'react';
import {useEffect} from 'react'


export default function ContactRow({ contact }) {
    export default function ContactRow({ contact }) {

        async function fetchContacts() {
          try {
            const response = await fetch(url);
      
            if(!response.ok) {
              throw new Error('Request failed'); 
            }
      
            const result = await response.json();
            console.log(result);
      
          } catch (error) {
            console.error('Error fetching contacts', error);
          }
        }
      
        useEffect(() => {
          fetchContacts();
        }, []);
      
      }
      
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }


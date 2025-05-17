import { v4 as uuidv4 } from "uuid";
import { contact, contactInput } from "../models/contact";
import { contactStorage } from "../storage/contactStorage";

export const contactService = {
    createContact:(contactsData:contactInput[]):contact[]=>{
        const createdContacts=[];
        for(const data of contactsData){
            const contact = {id:uuidv4(),...data}
            contactStorage.add(contact);
            createdContacts.push(contact);
        }
        return createdContacts;
    },
    updateContacts: (updates: Partial<contact>[]): contact[] => {
        const updatedContacts: contact[] = [];
      
        for (const update of updates) {
          const { id, ...fields } = update;
          if (!id) continue;
      
          const updated = contactStorage.updateContact(id, fields);
          if (updated) {
            updatedContacts.push(updated);
          }
        }
      
        return updatedContacts;
      },
      deleteContacts: (ids: string[]): { deleted: number } => {
        let count = 0;
      
        for (const id of ids) {
          if (contactStorage.delete(id)) {
            count++;
          }
        }
      
        return { deleted: count };
      },
      searchContacts: (query: string): contact[] => {
        return contactStorage.search(query);
      }
}
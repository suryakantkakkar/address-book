import { contact } from "../models/contact";

const contactMap:Map<string,contact> = new Map();

export const contactStorage = {
    add:(contact:contact):void=>{
        contactMap.set(contact.id,contact);
    },

    get: (id: string): contact | undefined => contactMap.get(id),

    updateContact:(id:string,fields:Partial<Omit<contact,"id">>):contact|null=>{
        const exist = contactMap.get(id);
        if(!exist){
            return null;
        }
        const updated = {...exist,...fields};
        contactMap.set(id,updated);
        return updated;
    },

    delete:(id:string):boolean=>{
        return contactMap.delete(id);
    },

    search:(query:string):contact[]=>{
        const q=query.toLowerCase();
        const contacts = [...contactMap.values()];
        const matchedContacts = contacts.filter((contact)=>{
            return contact.name.toLowerCase().includes(q)
        }) 
        return matchedContacts;
    }
}
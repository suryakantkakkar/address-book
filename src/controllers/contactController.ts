import { Request, Response } from "express";
import { contactService } from "../services/contactService";

export const contactController = {
  create: (req: Request, res: Response) => {
    const result = contactService.createContact(req.body);
    res.json(result);
  },

  update: (req: Request, res: Response) => {
    const result = contactService.updateContacts(req.body);
    res.json(result);
  },

  delete: (req: Request, res: Response) => {
    const result = contactService.deleteContacts(req.body);
    res.json(result);
  },

  search: (req: Request, res: Response) => {
    const { query } = req.body;
    const result = contactService.searchContacts(query);
    res.json(result);
  }
};

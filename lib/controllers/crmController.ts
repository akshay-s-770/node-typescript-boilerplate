import * as mongoose from "mongoose";
import { ContactSchema } from "../models/crmModels";
import { Request, Response } from "express";

const Contact = mongoose.model("Contact", ContactSchema);

export class ContactController {
  public addNewContact(req: Request, res: Response) { console.log(req.body);
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContacts(req: Request, res: Response) {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContactWithID(req: Request, res: Response) {
    Contact.findById(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response) {
    Contact.firdOneAndUpdate(
      {
        _id: req.params.contactId
      },
      { new: true },
      (err, contact) => {
        if (err) {
          res.send(err);
        }
        res.json(contact);
      }
    );
  }

  public deleteContact(req: Request, res: Response) {
    Contact.remove({ _id: req.params.contactId }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted contact!" });
    });
  }
}

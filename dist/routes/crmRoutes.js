"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({
                message: "GET Request successful!!!!"
            });
        });
        //contact
        app
            .route("/contact/")
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact);
        app
            .route("/contact/:contactId")
            // get specific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map
const argv = require("yargs").argv;
const contactOperations = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactOperations.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactOperations.getContactById({ id });
      console.log(contact);
      break;

    case "add":
      const newContact = await contactOperations.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "updateById":
      const updateContact = await contactOperations.updateById({
        id,
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;

    case "remove":
      const removeContact = await contactOperations.removeContact({ id });
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

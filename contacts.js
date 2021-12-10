const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(contactsPath);

/*
1. Получить все контакты. --> listContacts
2. Получить один контакт по id. --> getContactById
3. Удалить контакт по id. --> removeContact
4. Добавить контакт в список. --> addContact
5. Обновить контакт по id. --> changeContact
*/

const listContacts = async () => {
  //   console.log(contactsPath);
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.error(err);
  }
};

const getContactById = async (id) => {
  try {
    const contacts = await listContacts();
    // console.log(id);
    const contact = contacts.find((item) => item.id === String(id));
    if (!contact) {
      return null;
    }
    return contact;
  } catch (err) {
    console.error(err);
  }
};

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//     // ...твой код
// }

module.exports = {
  listContacts,
  getContactById,
  // removeContact,
  // addContact,
};

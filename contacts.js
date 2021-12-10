const { v4 } = require("uuid");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(contactsPath);

/*
1. Получить все контакты. --> listContacts
2. Получить один контакт по id. --> getContactById
3. Добавить контакт в список. --> addContact
4. Удалить контакт по id. --> removeContact
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

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const addContact = async (name, email, phone) => {
  try {
    const newContact = { id: v4(), name, email, phone };
    const contacts = await listContacts();
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (err) {
    console.error(err);
  }
};

const updateById = async (id, name, email, phone) => {
  const contacts = await listContacts();

  const idx = contacts.findIndex((item) => item.id === String(id));
  if (idx === -1) {
    return null;
  }

  contacts[idx] = {
    ...contacts[idx],
    name,
    email,
    phone,
  };
  await updateContacts(contacts);
  return contacts[idx];
  try {
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  listContacts,
  getContactById,
  updateById,
  // removeContact,
  addContact,
};

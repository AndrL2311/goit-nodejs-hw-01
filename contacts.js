const { v4 } = require("uuid");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(contactsPath);

/*
1. Получить все контакты. --> listContacts
2. Получить один контакт по id. --> getContactById
3. Добавить контакт в список. --> addContact
4. Обновить контакт по id. --> changeContact
5. Удалить контакт по id. --> removeContact

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

const getContactById = async ({ id }) => {
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

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const addContact = async ({ name, email, phone }) => {
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

const updateById = async ({ id, name, email, phone }) => {
  try {
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
  } catch (err) {
    console.error(err);
  }
};

const removeContact = async ({ id }) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === String(id));
    if (idx === -1) {
      return null;
    }

    const removeContact = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return removeContact;

    // const newContacts = contacts.filter((_, index) => index !== idx);
    // await updateContacts(newContacts);
    // return contacts[idx];
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  listContacts,
  getContactById,
  updateById,
  removeContact,
  addContact,
};

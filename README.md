# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list

<img src="./screenshot/list.png" alt="list1" with="400" />

# Получаем контакт по id

node index.js --action get --id 5

<img src="./screenshot/get.png" alt="list1" with="400" />

# Добавляем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

<img src="./screenshot/add.png" alt="list1" with="400" />

# Обновляем контакт

node index.js --action updateById --id 10 --name Bob --phone 355-55-5 --email bob@gmail.com

<img src="./screenshot/updateById.png" alt="list1" with="400" />

# Удаляем контакт

node index.js --action remove --id=3

<img src="./screenshot/remove.png" alt="list1" with="400" />

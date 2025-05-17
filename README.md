# Address Book Service

## Description

A modular in-memory address book service built with TypeScript and Express.  
Supports create, update, delete, and search operations via REST API.

## Setup Instructions

1. **Clone repo**
git clone https://github.com/suryakantkakkar/address-book.git
cd modular-address-book

2. **Install dependencies**  
npm install

3. **Run server**  
npm start

## API Endpoints

### 1. Create Contact(s)  
- **POST** `/create`  
- **Body:** Array of contacts without `id`  
- **Response:** Array of contacts with generated `id`

### 2. Update Contact(s)  
- **PUT** `/update`  
- **Body:** Array of partial contacts with mandatory `id`  
- **Response:** Array of updated contacts

### 3. Delete Contact(s)  
- **DELETE** `/delete`  
- **Body:** Array of contact `id`s to delete  
- **Response:** `{ deleted: number }`

### 4. Search Contact(s)  
- **POST** `/search`  
- **Body:** `{ query: string }`  
- **Response:** Array of contacts matching query in `name`, `email`, or `phone`

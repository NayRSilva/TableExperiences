import { useState } from "react";
import Table from "./Table";

const ExamplePage = () => {
  const data = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 3, name: "Robert Johnson", age: 40, email: "robert@example.com" },
    { id: 4, name: "Emily Anderson", age: 35, email: "emily@example.com" },
    { id: 5, name: "Michael Williams", age: 28, email: "michael@example.com" },
    { id: 6, name: "Olivia Brown", age: 32, email: "olivia@example.com" },
    { id: 7, name: "William Taylor", age: 45, email: "william@example.com" },
    { id: 8, name: "Sophia Martinez", age: 27, email: "sophia@example.com" },
    { id: 9, name: "James Garcia", age: 38, email: "james@example.com" },
    { id: 10, name: "Ava Robinson", age: 31, email: "ava@example.com" },
    { id: 11, name: "Emma Jones", age: 29, email: "emma@example.com" },
    { id: 12, name: "Liam Davis", age: 33, email: "liam@example.com" },
    { id: 13, name: "Mia Miller", age: 26, email: "mia@example.com" },
    { id: 14, name: "Noah Wilson", age: 42, email: "noah@example.com" },
    { id: 15, name: "Isabella Moore", age: 36, email: "isabella@example.com" },
    { id: 16, name: "Lucas Anderson", age: 37, email: "lucas@example.com" },
    { id: 17, name: "Amelia Thompson", age: 34, email: "amelia@example.com" },
    { id: 18, name: "Benjamin Harris", age: 41, email: "benjamin@example.com" },
    {
      id: 19,
      name: "Charlotte Jackson",
      age: 39,
      email: "charlotte@example.com",
    },
    { id: 20, name: "Ethan White", age: 24, email: "ethan@example.com" },
    { id: 21, name: "Harper Hill", age: 43, email: "harper@example.com" },
    { id: 22, name: "Alexander King", age: 44, email: "alexander@example.com" },
    { id: 23, name: "Abigail Evans", age: 28, email: "abigail@example.com" },
    { id: 24, name: "Daniel Bell", age: 30, email: "daniel@example.com" },
    { id: 25, name: "Elizabeth Reed", age: 35, email: "elizabeth@example.com" },
    { id: 26, name: "Liam Campbell", age: 32, email: "liam@example.com" },
    { id: 27, name: "Ella Phillips", age: 31, email: "ella@example.com" },
    { id: 28, name: "Mason Howard", age: 37, email: "mason@example.com" },
    { id: 29, name: "Avery Cox", age: 29, email: "avery@example.com" },
    { id: 30, name: "Addison Brooks", age: 33, email: "addison@example.com" },
    { id: 31, name: "Logan Nelson", age: 34, email: "logan@example.com" },
    { id: 32, name: "Chloe Rivera", age: 30, email: "chloe@example.com" },
    { id: 33, name: "Jackson Coleman", age: 38, email: "jackson@example.com" },
    { id: 34, name: "Layla Cooper", age: 27, email: "layla@example.com" },
    { id: 35, name: "Elijah Murphy", age: 42, email: "elijah@example.com" },
    { id: 36, name: "Nora Richardson", age: 39, email: "nora@example.com" },
    { id: 37, name: "Aiden Wood", age: 26, email: "aiden@example.com" },
    { id: 38, name: "Hailey Long", age: 28, email: "hailey@example.com" },
    { id: 39, name: "Carter Butler", age: 43, email: "carter@example.com" },
    { id: 40, name: "Aria Howard", age: 33, email: "aria@example.com" },
    { id: 41, name: "Grayson Foster", age: 30, email: "grayson@example.com" },
    { id: 42, name: "Scarlett Ward", age: 36, email: "scarlett@example.com" },
    { id: 43, name: "Wyatt Marshall", age: 35, email: "wyatt@example.com" },
    {
      id: 44,
      name: "Madison Herrera",
      age: 31,
      email: "aaaaaaaas nifpoae faoefeioga  agjeigaaega",
    },
  ];

  // Table headers
  const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "age", title: "Age" },
    { key: "email", title: "Email" },
  ];

  return (
    <>
      <div className="">
        <Table data={data} columns={columns}></Table>
      </div>
    </>
  );
};
export default ExamplePage;

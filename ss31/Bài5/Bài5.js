const employees = [
   {
    id: 1,
    name: 'John',
    age: 18,
    address: 'New York',
   },
   {
    id: 2,
    name: 'Mike',
    age: 22, 
    address: 'Canada',
   },
   {
    id: 3,
    name: 'Linda',
    age: 19, 
    address: 'California',
   },
   {
    id: 4,
    name: 'Peter',
    age: 25, 
    address: 'London',
   },
   {
    id: 5,
    name: 'Tony',
    age: 17, 
    address: 'New York',
   },
];
const table=document.getElementById("bodyTable");
employees.forEach(element=>{
      const row =`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.address}</td>
        </tr>
        `;
        table.innerHTML += row;
});
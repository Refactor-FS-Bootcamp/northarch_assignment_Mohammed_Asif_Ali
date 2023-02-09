export default function makeData(tdata) {
  let data = [];

  for (let i = 0; i < tdata.length; i++) {
    let row = {
      EmployeeID: tdata[i].EmployeeID,
      FirstName: tdata[i].FirstName,
      LastName: tdata[i].LastName,
      Email: tdata[i].Email,
      Age: tdata[i].Age,
    };
    data.push(row);
  }

  let columns = [
    {
      id: "EmployeeID",
      label: "Employee ID",
      accessor: "EmployeeID",
      minWidth: 100,
      dataType: "number",
      options: [],
    },
    {
      id: "FirstName",
      label: "First Name",
      accessor: "FirstName",
      minWidth: 100,
      dataType: "text",
      options: [],
    },
    {
      id: "LastName",
      label: "Last Name",
      accessor: "LastName",
      minWidth: 100,
      dataType: "text",
      options: [],
    },
    {
      id: "Age",
      label: "Age",
      accessor: "Age",
      width: 80,
      dataType: "number",
      options: [],
    },
    {
      id: "Email",
      label: "E-Mail",
      accessor: "Email",
      width: 300,
      dataType: "text",
      options: [],
    },
    {
      id: 999999,
      width: 20,
      label: "+",
      disableResizing: true,
      dataType: "null",
    },
  ];
  return { columns: columns, data: data, skipReset: false };
}

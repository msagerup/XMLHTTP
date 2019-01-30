document.getElementById('button1').addEventListener('click', loadCostumer);

document.getElementById('button2').addEventListener('click', loadCostumers);

function loadCostumer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.response);
      const costumer = JSON.parse(this.response);

      const output = `
        <ul>
          <li>ID : ${costumer.id}</li>
          <li>Name ${costumer.name}</li>
          <li>Company ${costumer.company}</li>
          <li>Name ${costumer.phone}</li>

        </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  };

  xhr.send();
}

// LOAD COSTUMERS. LOAD FROM A  ARRAY FROM OBJECT

function loadCostumers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.response);
      const costumers = JSON.parse(this.response);

      let output = '';

      costumers.forEach(costumer => {
        output += `
        <ul>
          <li>ID : ${costumer.id}</li>
          <li>Name ${costumer.name}</li>
          <li>Company ${costumer.company}</li>
          <li>Name ${costumer.phone}</li>

        </ul>
      `;
      });
      console.log(costumer);
      document.getElementById('customers').innerHTML = output;
    }
  };

  xhr.send();
}

// House all of the handler functions
//set up global variable to mock a DB
let TEST_DATA = [
  { id: 0, description: 'Content plan', rate: 50, hours: 4 },
  { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
  { id: 2, description: 'Website design', rate: 50, hours: 5 },
  { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

let globalId = 4;

const handlerFunctions = {
  getInvoices: (req, res) => {
    res.send({
      message: 'Here are all the new invoices',
      invoices: TEST_DATA,
    });
  },

  addInvoice: (req, res) => {
    //Get values from req.body
    const { description, rate, hours } = req.body;
    //Create a new object with those values
    const newInvoice = {
      id: globalId,
      description: description,
      rate: rate,
      hours: hours,
    };
    //Increment globalId for the next invoice
    globalId++;
    //Add the new invoice to TEST_DATA
    TEST_DATA.push(newInvoice);
    //Send response
    res.send({
      message: 'Invoice added successfully',
      newInvoice: newInvoice,
    });
  },

  deleteInvoice: (req, res) => {
    //extract the value of id from req.params
    const { id } = req.params;
    //filter out the invoice with the matching id
    TEST_DATA = TEST_DATA.filter((invoice) => invoice.id !== +id);
    //send response
    res.send({
      message: 'Invoice deleted successfully',
      invoices: TEST_DATA,
    });
  },

  editInvoice: (req, res) => {
    //Get values from req.body
    const { id, description, rate, hours } = req.body;
    //Find the index of the invoice with the matching id
    const idx = TEST_DATA.findIndex((invoice) => invoice.id === +id);
    //Grab the invoice at that index
    const invoice = TEST_DATA[idx];
    //Update the invoice
    invoice.description = description;
    invoice.rate = +rate;
    invoice.hours = +hours;
    //Send response
    res.send({
      message: 'Invoice updated successfully',
      updatedInvoice: invoice,
    });
  },
};

export default handlerFunctions;

// House all of the handler functions
//set up global variable to mock a DB
const TEST_DATA = [
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
};

export default handlerFunctions;

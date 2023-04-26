import { useState } from "react";

function App() {
  const [form, setForm] = useState(0);
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(form + 1);
  };

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  if (form === 1) {
    return (
      <div className="App">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="address">Address:</label>
          <br />
          <input
            type="text"
            id="address"
            name="Address"
            onChange={updateData}
            placeholder="Your Current Address"
          />
          <br />
          <label htmlFor="payment">Payment Details:</label>
          <br />
          <input
            type="number"
            id="payment"
            name="Card Details"
            onChange={updateData}
            placeholder="Card Number"
          />
          <input
            type="number"
            id="cvv"
            name="CVV"
            onChange={updateData}
            placeholder="CVV"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  if (form === 2) {
    return (
      <div className="App">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="number"
            id="Phone"
            required
            name="Phone No"
            onChange={updateData}
            placeholder="Your Phone Number"
          />
          <br />
          <label htmlFor="date">Date of Birth:</label>
          <br />
          <input
            type="date"
            id="date"
            required
            name="Date of Birth"
            onChange={updateData}
            placeholder="Your Birth Date"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  if (form === 3) {
    const renderedData = Object.keys(data).map((item, index) => {
      return (
        <div key={index} className="data_page">
          <span>{item}</span> - <span>{data[item]}</span>
          <hr />
        </div>
      );
    });
    return renderedData;
  }

  return (
    <div className="App">
      <>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            required
            name="First Name"
            onChange={updateData}
            placeholder="Your First Name"
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            required
            name="Last Name"
            onChange={updateData}
            placeholder="Your Last Name"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            required
            name="Email"
            onChange={updateData}
            placeholder="Your Email Address"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    </div>
  );
}

export default App;

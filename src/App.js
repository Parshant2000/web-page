
import './App.css';

function App() {
  return (
    <div className="App">

      <div class="header">


        <div class="row">
          <div class="card">
            <div className='grid-container'>
              <div className='grid-item1'>
                <img src='https://www.jotform.com/uploads/EdwardWrighton/form_files/sample6.jpg' width="100%" height="180px" alt="T-shirt" />
              </div>
              <div className='grid-item'>
                <h3>T-shirt</h3>
                <p>$ 1.00</p>
                <label htmlFor="quantity">Quantity:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="color">Color:</label><br></br>

                <select id="quantitySelect" name="quantitySelect">
                  {[...Array(8)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
                &nbsp;&nbsp;&nbsp;

                <select id="color" name="color">
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  {/* Add more color options as needed */}
                </select>
                <br /><br></br>
                <label htmlFor="size">Size:</label>
                <br></br>
                <select id="size" name="size">
                  <option value="small">X</option>
                  <option value="medium">XXL</option>
                  <option value="large">2XL</option>
                  {/* Add more size options as needed */}
                </select>
              </div>
            </div>
          </div>

          <div class="card">

            <div className='grid-item1'>
              <img src='https://www.jotform.com/uploads/EdwardWrighton/form_files/sample8%20copy.jpg' width="100%" height="180px" alt="T-shirt" />
            </div>
            <div className='grid-item'>
              <h3>Sweat-shirt</h3>
              <p>$ 5.00</p>
              <label htmlFor="quantity">Quantity:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor="color">Color:</label><br></br>

              <select id="quantitySelect" name="quantitySelect">
                {[...Array(8)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <select id="color" name="color">
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                {/* Add more color options as needed */}
              </select>
              <br /><br></br>
              <label htmlFor="size">Size:</label>
              <br></br>
              <select id="size" name="size">
                <option value="small">X</option>
                <option value="medium">XXL</option>
                <option value="large">2XL</option>
                {/* Add more size options as needed */}
              </select>
            </div>
          </div>


          <div class="card">

            <div className='grid-item3'>
              <img src='https://www.jotform.com/uploads/EdwardWrighton/form_files/sample9.jpg' width="100%" height="180px" />
            </div>
            <div className='grid-item'>
              <h3>Shoes</h3>
              <p>$ 10.00</p>
              <label htmlFor="quantity">Quantity:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label htmlFor="color">Shoes Size</label><br />

              <select id="quantitySelect" name="quantitySelect">
                {[...Array(8)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <select id="size" name="size">
                <option value="small">X</option>
                <option value="medium">XXL</option>
                <option value="large">2XL</option>
                {/* Add more size options as needed */}
              </select>
            </div>
          </div>

        </div>



        <h3>Product Order Form</h3>
        <p>Please make sure to fill in the required fields and submit this form to complete your order.</p>


        <div class="form">
          <label htmlFor="Name"><h4>Full Name:</h4></label>

          <div class="row">
            <div class="column">

              <input type="text" id="firstName" name="firstName" required /><br></br>
              <label htmlFor="firstName">First Name:</label>

            </div>
            <div class="column">


              <input type="text" id="lastName" name="lastName" required /><br></br>
              <label htmlFor="lastName">last Name:</label>

            </div>
          </div>



          <label htmlFor="email"><h4>E-mail</h4></label>
          <input type="email" id="email" name="email" required /><br></br>
          { /* Add the forward slash '/' before the closing angle bracket '>' */}
          <label htmlFor="contactNumber"><h3>Contact Number</h3></label>
          <input type="tel" id="contactNumber" name="contactNumber" required />
          {/* Add the forward slash '/' before the closing angle bracket '>' */}<br></br>




          <label htmlFor="billingAddress"><h4>Billing Address</h4></label><br />
          <input type="text1" id="streetAddress1" name="streetAddress1" required /><br></br>
          <label htmlFor="streetAddress1">Street Address:</label><br></br>


          <input type="text1" id="streetAddress2" name="streetAddress2" /><br></br>
          <label htmlFor="streetAddress1">Street Address 2:</label><br></br>


          <div class="row">
            <div class="column" >
              <input type="text" id="city" name="city" />
              <p>City</p>
            </div>
            <div class="column">
              <input type="text" id="city" name="city" />
              <p>State/Province</p>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <input type="text" id="city" name="city" />
              <p>Postal/Zip Codw</p>
            </div>
            <div class="column">
              <select id="country" name="country" required>
                <option>select country</option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>

                {/* Add more countries as needed */}
              </select>
              <p>Country</p>
            </div>
          </div>


          <h4>Is shipping address same as billing address?</h4>
          <div>
            <label htmlFor="yes_no_radio">Do you agree to the terms?</label><br />

            <label htmlFor="yes">
              <input type="radio" id="yes" name="yes_no" checked /> Yes
            </label>
          </div>
          <div>
            <label htmlFor="no">
              <input type="radio" id="no" name="yes_no" /> No
            </label>
          </div>


        </div>

      </div>

    </div>
  );
}

export default App;

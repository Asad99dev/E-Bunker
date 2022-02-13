import React, { useState } from "react";

export default function Survey() {
  const [state, setState] = useState({
    q1: "",
    q2: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: ""
  });
 

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }


  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>Statements</td>
            <td>Never</td>
            <td>Rarely</td>
            <td>Sometimes</td>
            <td>Often</td>
            <td>Always</td>
          </tr>
          <tr>
            <td>I use a unique password for each site.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q1"
                  checked={state.q1 === "1"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="2"
                  name="q1"
                  checked={state.q1 === "2"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="3"
                  name="q1"
                  checked={state.q1 === "3"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="4"
                  name="q1"
                  checked={state.q1 === "4"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="5"
                  name="q1"
                  checked={state.q1 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
          <td>I check to make sure the email is legitimate before clicking any links.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q2"
                  checked={state.q2 === "1"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="2"
                  name="q2"
                  checked={state.q2 === "2"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="3"
                  name="q2"
                  checked={state.q2 === "3"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="4"
                  name="q2"
                  checked={state.q2 === "4"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="5"
                  name="q2"
                  checked={state.q2 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
          <td>I make sure I am on the genuine site before entering my details.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q3"
                  checked={state.q3 === "1"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="2"
                  name="q3"
                  checked={state.q3 === "2"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="3"
                  name="q3"
                  checked={state.q3 === "3"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="4"
                  name="q3"
                  checked={state.q3 === "4"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="5"
                  name="q3"
                  checked={state.q3 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
          <td>I use a form of two-factor authentication for signing in to sites.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q4"
                  checked={state.q4 === "1"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="2"
                  name="q4"
                  checked={state.q4 === "2"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="3"
                  name="q4"
                  checked={state.q4 === "3"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="4"
                  name="q4"
                  checked={state.q4 === "4"}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="5"
                  name="q4"
                  checked={state.q4 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

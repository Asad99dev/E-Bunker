import React, { useState } from "react";
import "./Survey.css";
import axios from "axios";


const API_URL = "http://localhost:8080/api/survey/";

const user = JSON.parse(localStorage.getItem('user'));

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
    q10: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  function formSubmit(event) {
    event.preventDefault();

    const results = JSON.stringify({
      id: user.id,
      q1: parseInt(state.q1),
      q2: parseInt(state.q2),
      q3: parseInt(state.q3),
      q4: parseInt(state.q4),
      q5: parseInt(state.q5),
      q6: parseInt(state.q6),
      q7: parseInt(state.q7),
      q8: parseInt(state.q8),
      q9: parseInt(state.q9),
      q10: parseInt(state.q10),
    });

    return axios
      .post(API_URL + "submit", results, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + user.accessToken
        }
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }

  return (
    <form className="surveyForm" noValidate>
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
            <td>
              I check to make sure the email is legitimate before clicking any
              links.
            </td>
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
            <td>
              I make sure I am on the genuine site before entering my details.
            </td>
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
            <td>
              I use a form of two-factor authentication for signing in to sites.
            </td>
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
          <tr>
            <td>I create regular backups of my files.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q5"
                  checked={state.q5 === "1"}
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
                  name="q5"
                  checked={state.q5 === "2"}
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
                  name="q5"
                  checked={state.q5 === "3"}
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
                  name="q5"
                  checked={state.q5 === "4"}
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
                  name="q5"
                  checked={state.q5 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>I keep my social media private.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q6"
                  checked={state.q6 === "1"}
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
                  name="q6"
                  checked={state.q6 === "2"}
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
                  name="q6"
                  checked={state.q6 === "3"}
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
                  name="q6"
                  checked={state.q6 === "4"}
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
                  name="q6"
                  checked={state.q6 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>I keep my software updated.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q7"
                  checked={state.q7 === "1"}
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
                  name="q7"
                  checked={state.q7 === "2"}
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
                  name="q7"
                  checked={state.q7 === "3"}
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
                  name="q7"
                  checked={state.q7 === "4"}
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
                  name="q7"
                  checked={state.q7 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>I download only from trusted sites and platforms.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q8"
                  checked={state.q8 === "1"}
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
                  name="q8"
                  checked={state.q8 === "2"}
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
                  name="q8"
                  checked={state.q8 === "3"}
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
                  name="q8"
                  checked={state.q8 === "4"}
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
                  name="q8"
                  checked={state.q8 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>I never give out sensitive information.</td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q9"
                  checked={state.q9 === "1"}
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
                  name="q9"
                  checked={state.q9 === "2"}
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
                  name="q9"
                  checked={state.q9 === "3"}
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
                  name="q9"
                  checked={state.q9 === "4"}
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
                  name="q9"
                  checked={state.q9 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              I am aware of recent data breaches and check to see if I was
              affected.
            </td>
            <td>
              {" "}
              <div>
                <input
                  type="radio"
                  value="1"
                  name="q10"
                  checked={state.q10 === "1"}
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
                  name="q10"
                  checked={state.q10 === "2"}
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
                  name="q10"
                  checked={state.q10 === "3"}
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
                  name="q10"
                  checked={state.q10 === "4"}
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
                  name="q10"
                  checked={state.q10 === "5"}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={formSubmit}>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

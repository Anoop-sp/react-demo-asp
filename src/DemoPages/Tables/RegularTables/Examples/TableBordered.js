import React from "react";
import { Table } from "reactstrap";

export default class TableBordered extends React.Component {
  render() {
    return (
      <Table className="mb-0" bordered style={{ height: "350px" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th colSpan={3}>10D VaR 99% Confidence level</th>
            <th>VaR Results</th>
            <th colSpan={3}>Stress Loss</th>
          </tr>
          <tr>
            <th></th>
            <th>16-Aug-2024</th>
            <th>15-Aug-2024</th>
            <th></th>
            <th>15-Aug-2024</th>
            <th>16-Aug-2024</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i
                class="fa fa-fw fa-red"
                style={{ color: "red" }}
                aria-hidden="true"
                title="Copy to use caret-down"
              >
                
              </i>
            </td>
            <td>-80.11</td>
            <td>-68.41</td>
            <td>CBA</td>
            <td>-367</td>
            <td>-286</td>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "red" }}
                title="Copy to use caret-down"
              >
                
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "green" }}
                title="Copy to use caret-up"
              >
                
              </i>
            </td>
            <td>-0.63</td>
            <td>-0.86</td>
            <td>GROUP TREASURY</td>
            <td>-10</td>
            <td>-10</td>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "green" }}
                title="Copy to use caret-up"
              >
                {" "}
                
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "green" }}
                title="Copy to use caret-up"
              >
                
              </i>
            </td>
            <td>-0.53</td>
            <td>-0.-41.08</td>
            <td>IB&M</td>
            <td>-375</td>
            <td>--294</td>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "red" }}
                title="Copy to use caret-down"
              >
                
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "green" }}
                title="Copy to use caret-up"
              >
                
              </i>
            </td>
            <td>-0.53</td>
            <td>-0.-41.08</td>
            <td>IB&M</td>
            <td>-375</td>
            <td>--294</td>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "red" }}
                title="Copy to use caret-down"
              >
                
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "green" }}
                title="Copy to use caret-up"
              >
                
              </i>
            </td>
            <td>-0.53</td>
            <td>-0.-41.08</td>
            <td>IB&M</td>
            <td>-375</td>
            <td>--294</td>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "red" }}
                title="Copy to use caret-down"
              >
                
              </i>
            </td>
          </tr>
          <tr>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "green" }}
                title="Copy to use caret-up"
              >
                
              </i>
            </td>
            <td>-0.53</td>
            <td>-0.-41.08</td>
            <td>IB&M</td>
            <td>-375</td>
            <td>--294</td>
            <td>
              <i
                class="fa fa-fw"
                aria-hidden="true"
                style={{ color: "red" }}
                title="Copy to use caret-down"
              >
                
              </i>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

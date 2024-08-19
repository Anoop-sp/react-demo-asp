import React from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TableHover extends React.Component {
  render() {
    return (
      <Table hover className="mb-0">
        <thead>
          <tr>
            <th>
              10D VaR 99% Confidence level
              <tr>
                <th></th>
                <th>15-Aug-2024</th>
                <th>10-Aug-2024</th>
              </tr>
            </th>
            <th>VaR Results</th>
            <th>
              Stress Loss
              <tr>
                <th>10-Aug-2024</th>
                <th>15-Aug-2024</th>
                <th></th>
              </tr>
            </th>
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
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
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
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
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
            <td>the Bird</td>
            <td>@twitter</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
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

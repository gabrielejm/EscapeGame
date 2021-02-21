import React from "react";
import "./pages/scoreboard.css";

export class ScoreBoard extends Component {
  return() {
    <div>
      <div className="card">
        <div className="card-body">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td className="border-0">name</td>
                <td className="border-0">puzzle number</td>
                <td className="border-0">score</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
  }
}

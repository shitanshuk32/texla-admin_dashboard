import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./dataTable.scss";

function createData(
  name: string,
  trackingId: string,
  date: string,
  totalUserBase: string,
  lastBilling: string,
  status: string
) {
  return { name, trackingId, date, totalUserBase, lastBilling, status };
}

const rows = [
  createData(
    "Texla Culture",
    "12 Jan 2022",
    "07 Aug 2022",
    "244",
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "Pinch Life",
    "11 Feb 2022",
    "06 May 2022",
    "1000",
    "07 Aug 2022",
    "Active"
  ),
  createData(
    "O Buddy",
    "10 Sep 2022",
    "05 Oct 2022",
    "150",
    "07 Aug 2022",
    "Draft"
  ),
];

const makeStyle = (status: string) => {
  if (status === "Active") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Draft") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function DataTable() {
  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="left">Onboarding Date</TableCell>
              <TableCell align="left">Go-live Date</TableCell>
              <TableCell align="left">Total User base</TableCell>
              <TableCell align="left">Last Billing</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.totalUserBase}</TableCell>
                <TableCell align="left">{row.lastBilling}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

/* /* import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: -8,
    marginBottom: -8,
  },
  chip: { margin: 4 },
});

const QueueField = ({ record }) => {
  const classes = useStyles();

  return record ? (
    <span className={classes.main}>
      <Chip key={record} className={classes.chip} label={record} />
    </span>
  ) : null;
};

QueueField.defaultProps = {
  addLabel: true,
};

export default QueueField;
 */

/*import React from "react";

const populateList = (numbers) => {
  return numbers.map((number) => <li key={number.toString()}>{number}</li>);
};

const SimpleArray = ({ source, record = {} }) => (
  <ul>{populateList(record[source])}</ul>
);

SimpleArray.defaultProps = {
  addLabel: true,
  label: "List",
};

SimpleArray.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string,
};

export default SimpleArray;
 */

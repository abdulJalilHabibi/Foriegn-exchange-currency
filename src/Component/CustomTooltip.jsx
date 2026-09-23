export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null;
  }
  return (
    <div className="custom-tooltip">
      {" "}
      <p className="tooltip-date">
        {" "}
        {new Date(label).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}{" "}
      </p>{" "}
      <p className="tooltip-rate">
        {" "}
        {Number(payload[0].value).toFixed(5)}{" "}
      </p>{" "}
    </div>
  );
}

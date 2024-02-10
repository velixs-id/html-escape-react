import { Link } from "react-router-dom";

export default function LinkComp(props) {
  return (
    <Link
      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-gray-200 px-4 py-2 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-0"
      to={props.to}
    >
      <span className="text-sm font-medium">{props.text}</span>
    </Link>
  );
}

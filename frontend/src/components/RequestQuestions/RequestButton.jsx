import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RequestButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/schuldnerberatung")}
      className="fixed right-6 bottom-24 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg shadow-lg transition z-50"
    >
      <FileText size={22} />
    </button>
  );
}

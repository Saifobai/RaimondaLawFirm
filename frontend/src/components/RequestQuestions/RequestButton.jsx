import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function RequestButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/schuldnerberatung")}
      // Removed "fixed", "right-125", "top-4".
      // Added flex/items-center to ensure the icon stays centered.
      className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-xl shadow-lg transition-colors"
    >
      <FileText size={20} />
    </motion.button>
  );
}

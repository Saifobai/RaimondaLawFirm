import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function RequestButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/schuldnerberatung")}
      className="fixed right-6 bottom-24 bg-orange-400 hover:bg-orange-500 text-white p-4 rounded-xl shadow-lg z-50"
    >
      <FileText size={22} />
    </motion.button>
  );
}

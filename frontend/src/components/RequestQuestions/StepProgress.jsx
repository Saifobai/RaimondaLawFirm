export default function StepProgress({ step, total }) {
  return (
    <div className="flex items-center justify-between mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex-1 flex items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
            ${i <= step ? "bg-orange-400 text-white" : "bg-gray-200 text-gray-500"}`}
          >
            {i + 1}
          </div>

          {i < total - 1 && (
            <div
              className={`flex-1 h-1 ${i < step ? "bg-orange-400" : "bg-gray-200"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

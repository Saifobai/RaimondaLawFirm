export default function StepProgress({ step, total }) {
  const progress = ((step + 1) / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-900 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Step {step + 1} / {total}
      </p>
    </div>
  );
}

export default function InfoPanel({
  title = "info title",
  description = "info description",
}) {
  return (
    <div className="hidden lg:block w-64 h-full min-h-screen bg-gray-800 border-l border-gray-700 p-4">
      <h1 className="p-4 bg-slate-700 rounded-lg">{title}</h1>
      <p className="p-4 bg-slate-700 rounded-lg min-h-[70px] mt-5">
        {description}
      </p>
    </div>
  );
}

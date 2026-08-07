export default function InfoPanel({ title, description }) {
  return (
    <div className="hidden lg:block w-75 h-full min-h-screen bg-gray-800 border-l border-gray-700 p-4 text-center overflow-scroll">
      <div className="border-b-2 pb-5">
        <h1 className="p-4 bg-slate-700 rounded-lg">{title}</h1>
        <p className="p-4 bg-slate-700 rounded-lg mt-5">{description}</p>
      </div>
      <h1 className="p-5 mt-3 bg-gray-700 rounded-lg">
        محل قرار گیری فرمول ها
      </h1>
    </div>
  );
}

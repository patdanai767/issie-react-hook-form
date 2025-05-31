export default function Sidebar() {
  return (
    <div className="space-y-4">
      <div className="flex items-center mx-4">
        <div className="whitespace-nowrap flex items-center justify-between text-2xl font-semibold text-brown">
          S e t t i n g s
        </div>
        <select className="sm:hidden flex w-full px-4 ml-4 border py-2 rounded-3xl bg-orange text-yellow cursor-pointer outline-none">
          <option value="accountinfo">Account Info</option>
          <option value="security">Security</option>
          <option value="notifications">Notifications</option>
          <option value="privacy">Privacy & content restrictions</option>
          <option value="dashboard">Dashboard</option>
        </select>
      </div>
      <div className="hidden text-sm sm:flex flex-col items-start rounded bg-green p-2 py-3 text-yellow space-y-3">
        <a
          href="#"
          className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-orange/20 border-b-brown border-1
            "
        >
          Account Info
        </a>
        <a
          href="#"
          className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-orange/20 border-b-brown border-1
            "
        >
          Security
        </a>
        <a
          className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-orange/20 border-b-brown border-1
          "
          href="#"
        >
          Notifications
        </a>
        <a
          href="#"
          className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-orange/20 border-b-brown border-1"
        >
          Privacy & content restrictions
        </a>
        <a
          href="#"
          className="w-full h-full p-2 rounded-xl cursor-pointer hover:bg-orange/20 border-b-brown border-1"
        >
          Dashboard
        </a>
      </div>
    </div>
  );
}

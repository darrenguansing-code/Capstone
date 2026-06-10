import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Bus, MapPin, Clock, Wallet, House } from "lucide-react";


const transportLocations = [
  { id: 1, name: "Paragon Village", details: "10 km from school", rate: "₱3,500" },
  { id: 2, name: "Exact Location 2", details: "9.8 km from school", rate: "₱3,500" },
  { id: 3, name: "Exact Location 3", details: "10.2 km from school", rate: "₱3,500" },
  { id: 4, name: "Exact Location 4", details: "10.1 km from school", rate: "₱3,500" },
  { id: 5, name: "Exact Location 5", details: "9.5 km from school", rate: "₱3,500" },
  { id: 6, name: "Exact Location 6", details: "10 km from school", rate: "₱3,500" },
  { id: 7, name: "Exact Location 7", details: "10.4 km from school", rate: "₱3,500" },
  { id: 8, name: "Exact Location 8", details: "9.9 km from school", rate: "₱3,500" },
  { id: 9, name: "Exact Location 9", details: "10 km from school", rate: "₱3,500" },
  { id: 10, name: "Exact Location 10", details: "10.3 km from school", rate: "₱3,500" },
];

export default function TransportationFees() {
  return (
    <section className="px-6 py-10">
      <div className="ml-30 mr-30 mx-auto mb-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="flex items-center gap-2 border-l-4 border-green-700 text-green-700 text-xl font-bold pl-3">
              <Bus size={30} className="text-green-700" />
              TRANSPORTATION FEES SY 2026–2027
            </h2>
          </div>

            <Link
            to="/tuition-fee"
            className="inline-flex items-center justify-center rounded-full border border-green-700 bg-white/10 px-6 py-3 text-sm font-semibold text-green-700 backdrop-blur-sm hover:bg-white/20 gap-3 transition"
          >
            <Wallet size={20} className="text-black" />
            Tuition Fees
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {transportLocations.map((location) => (
            <div
              key={location.id}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Exact Location Estimate
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{location.name}</h3>
              <p className="mt-3 text-sm text-slate-500">{location.details}</p>
              <p className="mt-6 text-4xl font-bold text-orange-600">{location.rate}</p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-green-600" />
                  Pickup and drop-off included
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-green-600" />
                  Scheduled twice daily
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-5 text-orange-900 shadow-sm">
          <p className="text-sm font-semibold">Estimated for these exact locations:</p>
          <p className="mt-2 text-2xl font-bold">₱3,500</p>
          <p className="mt-2 text-sm text-orange-700">
            I-edit ang mga pangalan sa itaas para ilagay ang iyong mga eksaktong route at pickup points.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1.5fr]">
          <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
            <p className="text-sm text-green-900 text-left">
              Note: These rates are based on standard routes. The final transportation fee may vary depending on the exact pickup location and van availability.
            </p>
            <p className="text-sm text-green-900 text-left">
              If you would like to avail of the transportation service, please complete the application form first and visit the school on your selected schedule. Kindly coordinate with the school office for further assistance.
            </p>
            <p className="text-sm text-green-900 text-left">
              Thank You!
            </p>
            
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Booking Steps</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 list-disc list-inside">
              <li>Mag-fill out ng transportation application form.</li>
              <li>Magbayad ng reservation fee para ma-confirm ang seat.</li>
              <li>Maghintay ng route assignment at schedule confirmation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

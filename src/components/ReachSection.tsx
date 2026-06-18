import AnimatedSection from './AnimatedSection';
import { FaMapMarkerAlt } from 'react-icons/fa';

const provinces = [
  { name: 'Koshi', color: 'from-blue-500 to-blue-600' },
  { name: 'Madhesh', color: 'from-green-500 to-green-600' },
  { name: 'Bagmati', color: 'from-purple-500 to-purple-600' },
  { name: 'Gandaki', color: 'from-orange-500 to-orange-600' },
  { name: 'Lumbini', color: 'from-teal-500 to-teal-600' },
  { name: 'Karnali', color: 'from-red-500 to-red-600' },
  { name: 'Sudurpaschim', color: 'from-indigo-500 to-indigo-600' },
];

export default function ReachSection() {
  return (
    <AnimatedSection id="reach" className="bg-surface">
      <div className="mx-auto mb-4 section-divider" />
      <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-[32px]">
        Our Reach
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-body-text/60">
        IFN programs are active across all seven provinces of Nepal, ensuring that
        digital transformation reaches every corner of the country.
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {provinces.map((province) => (
          <div
            key={province.name}
            className="card-hover group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm"
          >
            <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${province.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
              <FaMapMarkerAlt className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-body-text">{province.name}</p>
            <p className="mt-1 text-xs text-body-text/40">Province</p>
          </div>
        ))}
      </div>

      {/* Nepal outline text */}
      <div className="mt-12 text-center">
        <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-primary/5 px-6 py-3">
          <FaMapMarkerAlt className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary/80">Active in all 7 provinces of Nepal</span>
        </div>
      </div>
    </AnimatedSection>
  );
}

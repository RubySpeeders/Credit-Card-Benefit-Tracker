export type Benefit = {
  id: string;
  title: string;
  monetary_value: number;
  reset_interval: string;
  description: string;
};

interface BenefitItemProps {
  benefit: Benefit;
  isUsed: boolean;
  onToggle: (id: string) => void;
}

export default function BenefitItem({ benefit, isUsed, onToggle }: BenefitItemProps) {
  return (
    <div className="flex items-start justify-between p-4 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex-1 pr-4">
        <h3 className={`text-lg font-semibold transition-colors ${isUsed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
          {benefit.title} (${benefit.monetary_value})
        </h3>
        <p className="mt-1 text-sm text-gray-500">{benefit.description}</p>
        <span className="inline-block px-2 py-1 mt-2 text-xs font-medium text-blue-700 bg-blue-50 rounded">
          Resets: {benefit.reset_interval}
        </span>
      </div>
      
      <button
        onClick={() => onToggle(benefit.id)}
        aria-label="Toggle benefit status"
        className={`flex items-center justify-center w-8 h-8 transition-colors border-2 rounded-full shrink-0 ${
          isUsed ? 'bg-green-500 border-green-500 text-white' : 'bg-transparent border-gray-300'
        }`}
      >
        {isUsed && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
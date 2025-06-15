import React, { useState } from 'react';

interface PascodeData {
  [key: string]: {
    srid: string;
    senior_rater_name: string;
    senior_rater_rank: string;
    senior_rater_title: string;
  };
}

interface PascodeInputFormProps {
  pascodes?: string[];
  small_unit: boolean,
  error_log: string[],
  onSubmit?: (data: PascodeData) => void;
}

const PascodeInputForm: React.FC<PascodeInputFormProps> = ({ pascodes = [], error_log,  small_unit, onSubmit }) => {

  const [pascodeData, setPascodeData] = useState<PascodeData>(() => {
    const initialData: PascodeData = {};
    if (pascodes && pascodes.length > 0) {
      pascodes.forEach(code => {
        initialData[code] = {
          srid: '',
          senior_rater_name: '',
          senior_rater_rank: '',
          senior_rater_title: ''
        };
      });
    }
    return initialData;
  });


  const handleInputChange = (pascode: string, field: keyof PascodeData[string], value: string) => {
    setPascodeData(prev => ({
      ...prev,
      [pascode]: {
        ...prev[pascode],
        [field]: value
      }
    }));
  };

  const handleSubmit = () => {
    console.log('Pascode Data:', pascodeData);
    if (onSubmit) {
      onSubmit(pascodeData);
    }
  };

  const handleClear = () => {
    const clearedData: PascodeData = {};
    if (pascodes && pascodes.length > 0) {
      pascodes.forEach(code => {
        clearedData[code] = {
          srid: '',
          senior_rater_name: '',
          senior_rater_rank: '',
          senior_rater_title: ''
        };
      });
    }
    setPascodeData(clearedData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Senior Rater Information Entry
      </h2>
      
      <div className="space-y-6">
        {(!pascodes || pascodes.length === 0) ? (
          <div className="text-center py-8 text-gray-500">
            No pascodes provided. Please pass a pascodes array to the component.
          </div>
        ) : (
          pascodes.map((pascode) => (
            <div key={pascode} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{pascode}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label 
                    htmlFor={`${pascode}-srid`}
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    SRID
                  </label>
                  <input
                    id={`${pascode}-srid`}
                    type="text"
                    value={pascodeData[pascode]?.srid || ''}
                    onChange={(e) => handleInputChange(pascode, 'srid', e.target.value)}
                    placeholder="Enter SRID"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label 
                    htmlFor={`${pascode}-name`}
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Unit Commander Name
                  </label>
                  <input
                    id={`${pascode}-name`}
                    type="text"
                    value={pascodeData[pascode]?.senior_rater_name || ''}
                    onChange={(e) => handleInputChange(pascode, 'senior_rater_name', e.target.value)}
                    placeholder="Enter senior rater name"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label 
                    htmlFor={`${pascode}-rank`}
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Rank
                  </label>
                  <input
                    id={`${pascode}-rank`}
                    type="text"
                    value={pascodeData[pascode]?.senior_rater_rank || ''}
                    onChange={(e) => handleInputChange(pascode, 'senior_rater_rank', e.target.value)}
                    placeholder="Enter senior rater rank"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label 
                    htmlFor={`${pascode}-title`}
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Duty Title
                  </label>
                  <input
                    id={`${pascode}-title`}
                    type="text"
                    value={pascodeData[pascode]?.senior_rater_title || ''}
                    onChange={(e) => handleInputChange(pascode, 'senior_rater_title', e.target.value)}
                    placeholder="Enter senior rater title"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          ))
        )}

        {small_unit && (
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Small Unit Senior Rater</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label 
                    htmlFor={`small_unit_sr-srid`}
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    SRID
                  </label>
                  <input
                    id={`small_unit_sr-srid`}
                    type="text"
                    value={pascodeData['small_unit_sr']?.srid || ''}
                    onChange={(e) => handleInputChange('small_unit_sr', 'srid', e.target.value)}
                    placeholder="Enter SRID"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label 
                    htmlFor={`small_unit_sr-name`}
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Senior Rater Name
                  </label>
                  <input
                    id={`small_unit_sr-name`}
                    type="text"
                    value={pascodeData['small_unit_sr']?.senior_rater_name || ''}
                    onChange={(e) => handleInputChange('small_unit_sr', 'senior_rater_name', e.target.value)}
                    placeholder="Enter senior rater name"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label 
                    htmlFor={`small_unit_sr-rank`}
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Senior Rater Rank
                  </label>
                  <input
                    id={`small_unit_sr-rank`}
                    type="text"
                    value={pascodeData['small_unit_sr']?.senior_rater_rank || ''}
                    onChange={(e) => handleInputChange('small_unit_sr', 'senior_rater_rank', e.target.value)}
                    placeholder="Enter senior rater rank"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label 
                    htmlFor={`small_unit_sr-title`}
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Senior Rater Title
                  </label>
                  <input
                    id={`small_unit_sr-title`}
                    type="text"
                    value={pascodeData['small_unit_sr']?.senior_rater_title || ''}
                    onChange={(e) => handleInputChange('small_unit_sr', 'senior_rater_title', e.target.value)}
                    placeholder="Enter senior rater title"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
        )}
        
        {pascodes && pascodes.length > 0 && (
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Submit
            </button>
            <button
              onClick={handleClear}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Display current data (for development/debugging) */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Errors:</h3>
        <div className=''>
            {error_log.map((error) => (
                <p>{error}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

// Example usage:
// const App = () => {
//   const myPascodes = [
//     "OP0RFGDF",
//     "OP0RFGMK", 
//     "OP0RFGSB",
//     "OP0RFJ0R",
//     "OP0RFWNM"
//   ];
//
//   const handleFormSubmit = (data: PascodeData) => {
//     console.log('Form submitted with data:', data);
//     // Send to API, update parent state, etc.
//   };
//
//   return (
//     <PascodeInputForm 
//       pascodes={myPascodes} 
//       onSubmit={handleFormSubmit}
//     />
//   );
// };

export default PascodeInputForm;
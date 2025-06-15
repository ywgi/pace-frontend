// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";

// const InitialMelPage = () => {
//     return (
//         <div className="flex flex-col min-h-screen">
//             <Header />
//             <main className="flex-grow pt-20">
//                 <div className="flex flex-col items-center justify-center">
//                     <div className="flex flex-col items-center justify-center max-w-[50vw] pt-8 space-y-4">
//                         <h1 className="text-4xl font-poppins tracking-widest text-[#137bec]">Initial Mel</h1>
//                         <p>
//                             Upload your base roster in excel format and we'll take care of the rest. If you don't understand what our 
//                             process is, feel free to check out our <Link to="/how-to"><span className="font-bold text-[#137bec]">how to</span></Link> section 
//                             to familiarize yourself with our product. You can also verify that your document contains the required columns to ensure smooth processing.
//                         </p>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default InitialMelPage;

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useState, DragEvent, ChangeEvent } from "react";
import PascodeInputForm from "../Components/PascodeInputForm";

const InitialMelPage = () => {
    const [sessionId, setSessionId] = useState<string>('');
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [processingError, setProcessingError] = useState<string | null>(null);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [cycle, setCycle] = useState<string>('MSG');
    const [year, setYear] = useState<string>('2025');
    const [processComplete, setProcessComplete] = useState<boolean>(false);
    const [pascodes, setPascodes] = useState<string []>([]);
    const [pascodeUnitMap, setPascodeUnitMap] = useState<Record<string, string>>();
    const [pascodeFormSubmitted, setPascodeFormSubmitted] = useState<boolean>(false);
    const [isSmallUnit, setIsSmallUnit] = useState<boolean>(false);
    const [errorLog, setErrorLog] = useState<string[]>([]);


    interface PascodeData {
        [key: string]: {
            srid: string;
            senior_rater_name: string;
            senior_rater_rank: string;
            senior_rater_title: string;
        };
    }

    const cycleOptions = [
        { value: 'SRA', label: 'SRA'},
        { value: 'SSG', label: 'SSG'},
        { value: 'TSG', label: 'TSG'},
        { value: 'MSG', label: 'MSG'},
        { value: 'SMS', label: 'SMS'},
    ]

    const yearOptions = [
        { value: '2025', label: '2025' },
        { value: '2026', label: '2026' }
    ]

    const uploadFile = async (file: File, cycle: string, year: string): Promise<{message: string, session_id: string, pascodes: string[] | undefined, senior_rater_needed: boolean, pascode_unit_map: Record<string, string> | undefined ,errors: string[]}> => {
        const formData = new FormData();
        formData.append('file', file);
        if (cycle) {
            formData.append('cycle', cycle)
        }
        if (year) {
            formData.append('year', year);
        }
        
        const response = await fetch('https://pace-af-tool.com/api/upload/initial-mel', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || errorData.detail || 'Upload failed');
        }
        
        const result = await response.json();
        return result;
    };




    const handleProcessRoster = async () => {
        if (!uploadedFile) return;
        
        setIsProcessing(true);
        setProcessingError(null);
        setDownloadUrl(null);
        
        try {
            const result = await uploadFile(uploadedFile, cycle, year);

            setSessionId(result.session_id);
            setIsSmallUnit(result.senior_rater_needed);
            setErrorLog(result.errors);

            if (result.pascodes && result.pascodes?.length != 0) {
                setPascodes(result.pascodes);
                setProcessComplete(true);
            }

            if (result.pascode_unit_map) {
                setPascodeUnitMap(result.pascode_unit_map);
            }
            // If you're using the two-step approach with download URL:
            setDownloadUrl(`https://pace-af-tool.com/api/download/initial-mel/${result.session_id}`);

        } catch (error) {
            setProcessingError(error instanceof Error ? error.message : 'Processing failed');
        } finally {
            setIsProcessing(false);
        }
    };

    const submitPascodeData = async (pascodeData: any) => {
        const response = await fetch('https://pace-af-tool.com/api/submit/pascode-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pascode_info: pascodeData,
                session_id: sessionId, // Link it to the original upload
            }),
        });

        if (!response.ok) {
            try {
                const errorData = await response.json();
                throw new Error(errorData.error || errorData.detail || 'Submission failed');
            } catch {
                throw new Error('Submission failed and response is not JSON');
            }
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'initial_mel_roster.pdf';
        link.click();
        window.URL.revokeObjectURL(url);
    };
    
    const sanitizePascodeData = (data: PascodeData): PascodeData => {
        const sanitized: PascodeData = {};

        console.log(data);

        for (const pascode in data) {
            const entry = data[pascode];
            sanitized[pascode] = {
            srid: entry.srid?.trim() || 'SRID',
            senior_rater_name: entry.senior_rater_name?.trim() || 'First M. Last',
            senior_rater_rank: entry.senior_rater_rank?.trim() || 'Rank',
            senior_rater_title: entry.senior_rater_title?.trim() || 'Duty Title',
            };
        }

        return sanitized;
    };

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setUploadedFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setUploadedFile(e.target.files[0]);
        }
    };

    const requiredColumns = [
        "FULL_NAME",
        "GRADE", 
        "ASSIGNED_PAS_CLEARTEXT",
        "DAFSC",
        "DOR",
        "DATE_ARRIVED_STATION",
        "TAFMSD",
        "REENL_ELIG_STATUS",
        "ASSIGNED_PAS",
        "CAFSC"
    ];

    const optionalColumns = [
        'GRADE_PERM_PROJ', 
        'UIF_CODE', 
        'UIF_DISPOSITION_DATE', 
        '2AFSC', 
        '3AFSC', 
        '4AFSC'
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="flex flex-col items-center justify-center max-w-4xl pt-8 pb-8 space-y-8">
                        <h1 className="text-4xl font-poppins tracking-widest text-[#137bec]">Initial Mel</h1>
                        
                        {/* Introduction Section */}
                        <div className="text-center space-y-4">
                            <p className="text-lg text-gray-700">
                                Upload your base roster in Excel format and we'll take care of the rest. If you don't understand what our 
                                process is, feel free to check out our <Link to="/how-to"><span className="font-bold text-[#137bec] hover:underline">how to</span></Link> section 
                                to familiarize yourself with our product. You can also verify that your document contains the required columns to ensure smooth processing.
                            </p>
                        </div>

                        {/* File Upload Section */}
                        <div className="w-full max-w-2xl">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Upload Your Roster</h2>
                            <div 
                                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                                    dragActive 
                                        ? 'border-[#137bec] bg-blue-50' 
                                        : 'border-gray-300 hover:border-[#137bec]'
                                }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    accept=".xlsx,.xls"
                                    onChange={handleFileSelect}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                
                                {uploadedFile ? (
                                    <div className="space-y-2">
                                        <div className="text-green-600 text-lg font-medium">✓ File Selected</div>
                                        <div className="text-gray-700">{uploadedFile.name}</div>
                                        <button 
                                            onClick={() => setUploadedFile(null)}
                                            className="text-sm text-[#137bec] hover:underline"
                                        >
                                            Choose different file
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="text-6xl text-gray-400">📁</div>
                                        <div>
                                            <p className="text-lg font-medium text-gray-700">
                                                Drag and drop your Excel file here
                                            </p>
                                            <p className="text-gray-500">or click to browse</p>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Supported formats: .xlsx, .xls
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify center pt-8">
                                <div className="flex items-center justify-center w-[80vw] gap-20">
                                    <div className="w-48">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Cycle
                                        </label>
                                        <select
                                            value={cycle}
                                            onChange={(e) => setCycle(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        >
                                            <option value="" disabled>
                                                Select cycle
                                            </option>
                                            {cycleOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-48">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Year
                                        </label>
                                        <select
                                            value={year}
                                            onChange={(e) => setYear(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        >
                                            <option value="" disabled>
                                                Select year
                                            </option>
                                            {yearOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {uploadedFile && (
                            <div className="mt-4 text-center space-y-4">
                                {!downloadUrl && !processingError && (
                                <button 
                                    onClick={handleProcessRoster}
                                    disabled={isProcessing}
                                    className="bg-[#137bec] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? 'Processing...' : 'Process Roster'}
                                </button>
                                )}

                                {processComplete && !pascodeFormSubmitted && (
                                    <PascodeInputForm 
                                        pascodes={pascodes}
                                        pascode_unit_map={pascodeUnitMap}
                                        error_log={errorLog}
                                        small_unit={isSmallUnit}
                                        onSubmit={(data) => {
                                            const sanitizedData = sanitizePascodeData(data);
                                            submitPascodeData(sanitizedData);
                                            setPascodeFormSubmitted(true); // Hide the form
                                        }}
                                    />
                                )}
                                
                                {processingError && (
                                <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                                    <p className="font-medium">Error processing file:</p>
                                    <p className="text-sm">{processingError}</p>
                                    <button 
                                    onClick={() => {setProcessingError(null); setDownloadUrl(null);}}
                                    className="mt-2 text-sm text-[#137bec] hover:underline"
                                    >
                                    Try Again
                                    </button>
                                </div>
                                )}
                                
                                {downloadUrl && (
                                <div className="space-y-2">
                                    <div className="text-green-600 font-medium">✓ Processing Complete!</div>
                                </div>
                                )}
                            </div>
                            )}
                        </div>

                        {/* Required Columns Section */}
                        <div className="w-full max-w-2xl bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Columns</h3>
                            <p className="text-gray-600 mb-4">
                                Ensure your Excel file contains the following columns for successful processing:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {requiredColumns.map((column, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-700">{column}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-[#137bec]">
                                <p className="text-sm text-gray-700">
                                    <strong>Note:</strong> Column names must match exactly (case-sensitive). 
                                </p>
                            </div>
                        </div>

                        {/* Optional Columns Section */}
                        <div className="w-full max-w-2xl bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Optional Columns</h3>
                            <p className="text-gray-600 mb-4">
                                Ensure your Excel file contains the following columns for optimal processing:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {optionalColumns.map((column, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-700">{column}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 p-3 bg-blue-50 rounded border-l-4 border-[#137bec]">
                                <p className="text-sm text-gray-700">
                                    <strong>Note:</strong> Column names must match exactly (case-sensitive). 
                                
                                </p>
                            </div>
                        </div>

                        {/* Process Overview */}
                        <div className="w-full max-w-2xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">What Happens Next?</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#137bec] text-white rounded-full flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">File Validation</h4>
                                        <p className="text-gray-600 text-sm">We'll check your file format and verify all required columns are present.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#137bec] text-white rounded-full flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">Data Processing</h4>
                                        <p className="text-gray-600 text-sm">Your roster data will be processed and prepared for integration.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#137bec] text-white rounded-full flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">Review & Confirm</h4>
                                        <p className="text-gray-600 text-sm">You'll get a preview of the processed data before final submission.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Help Section */}
                        <div className="w-full max-w-2xl bg-yellow-50 rounded-lg p-6 border border-yellow-200 pb">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Help?</h3>
                            <p className="text-gray-700 text-sm">
                                If you're having trouble with file format or column requirements, visit our{" "}
                                <Link to="/how-to" className="text-[#137bec] font-medium hover:underline">
                                    how-to guide
                                </Link>
                                {" "}or{" "}
                                <Link to="/support" className="text-[#137bec] font-medium hover:underline">
                                    contact support
                                </Link>
                                {" "}for assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default InitialMelPage;
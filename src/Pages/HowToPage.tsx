import { useEffect, useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import afwnbg from '../assets/af-white-nbg.png'

const HowToPage = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const sections = [
        {
            title: "SCOD MANAGEMENT",
            description: "The Static Closeout Date (SCOD) is a system central to the Air Force's performance evaluation and promotion cycles. Our application:",
            points: [
                "Maintains the official SCOD calendar for each rank (31 March for SrA, 31 January for SSgt, etc.).",
                "Aligns eligibility calculations with the correct evaluation cycle for each rank.",
                "Ensures all promotion decisions follow the appropriate timing based on AFPC guidelines.",
                "Synchronizes promotion consideration with EPR closeout dates as required by AFI 36-2406."
            ]
        },
        {
            title: "ACCOUNTING DATE CALCULATIONS",
            description: "Personnel mobility can be a challenge for promotion eligibility, but we take care of it for you.",
            points: [
                "Automatically calculates the 120-day cutoff date for each SCOD period",
                "Determines if recently PCS'd members meet station stability requirements.",
                "Adjusts dates appropriately to account for the exact 120-day requirement (minus 1 day).",
                "Provides clear documentation of eligibility/ineligibility for members who have recently changed stations."
            ]
        },
        {
            title: "HIGHER TENURE TRACKING",
            description: "Career progression limits are carefully tracked:",
            points: [
                "Implements standard High Year of Tenure (HYT) policies per rank (10 years for SrA, 20 for SSgt, etc.).",
                "Automatically adjusts for the special exception period between December 2023 and September 2026.",
                "Applies the 2-year HYT extension for eligible members during the exception period.",
                "Prevents consideration of members who would hit HYT before promotion can take effect."
            ]
        },
        {
            title: "CAFSC SKILL LEVEL VERIFICATION",
            description: "Career field progression requirements are strictly enforced:",
            points: [
                "Verifies that members have the minimum required skill level for their current rank (5-level for SSgt, 7-level for TSgt, etc.).",
                "Checks primary CAFSC first, then examines secondary AFSCs when necessary",
                "Handles both 5-digit and 6-digit AFSC formats correctly.",
                "Screens out Special Duty AFSCs (8XXXX and 9XXXX) that require special handling."
            ]
        },
        {
            title: "PROMOTION ALLOCATION CALCULATOR",
            description: "Streamlines the critical allocation of promotion recommendations:",
            points: [
                "Calculates exact Must Promote (MP) and Promote Now (PN) quotas based on official tables.",
                "Supports both E4 (SrA) allocation rates and the different E5-E6 (SSgt/TSgt) allocation tables.",
                "Adjusts allocations automatically as unit size changes due to PCS/reassignments.",
                "Ensures compliance with forced distribution guidelines in AFI 36-2406."
            ]
        }
    ];

    const sections2 = [
        {
            title: "AUTOMATED ELIGIBILITY PROCESSING",
            description: "This cornerstone feature transforms what would otherwise be a manual, error-prone process into a streamlined operation.",
            points: [
                { bold: "Comprehensive Data Analysis: ", text: "Automatically processes the entire Alpha Roster to systematically evaluate every service member against promotion criteria." },
                { bold: "Rank-Specific Processing: ", text: "Applies different rule sets based on the target promotion cycle (SrA, SSgt, TSgt, MSgt, SMSgt)." },
                { bold: "Multi-Factor Evaluation: ", text: "Simultaneously checks multiple eligibility factors including DOR (Date of Rank), TAFMSD (Total Active Federal Military Service Date), reenlistment codes, disciplinary status, and AFSC requirements." },
                { bold: "Categorized Results: ", text: "Automatically sorts personnel into appropriate categories (eligible, ineligible, BTZ eligible) with no manual intervention." },
                { bold: "Batch Processing Capability: ", text: "Handles hundreds of records in seconds, eliminating days of manual review work." }
            ]
        },
        {
            title: "CUSTOMIZED ELIGIBILITY CRITERIA",
            description: "The system implements the complex promotion eligibility rules with precision:",
            points: [
                { bold: "Time-in-Grade Requirements: ", text: "Enforces specific TIG minimums (6 months for SrA, 23 months for SSgt, etc.)." },
                { bold: "Time-in-Service Calculations: ", text: "Validates members meet minimum TIS requirements (3 years for SrA, 5 years for SSgt, etc.)." },
                { bold: "Disciplinary Status Integration: ", text: "Automatically flags and excludes members with active UIFs or disqualifying RE codes." },
                { bold: "Special Handling for A1C to SrA: ", text: "Includes unique processing for standard (28 months) and BTZ (22 months) promotion eligibility." },
                { bold: "Dynamic Criteria Adaptation: ", text: "Framework allows for easy updates when Air Force promotion criteria change." }
            ]
        },
        {
            title: "PDF REPORT GENERATION",
            description: "The system produces professional, standardized documentation required for the promotion process:",
            points: [
                { bold: "Master Eligibility List (MEL): ", text: "Generates the official roster of eligible candidates with all required information." },
                { bold: "Ineligibility Documentation: ", text: "Creates detailed reports of ineligible members with specific reasons for ineligibility." },
                { bold: "Unit-Specific Reports: ", text: "Organizes reports by PAS codes and command structures." },
                { bold: "Small Unit Reports: ", text: "Special handling for units with fewer than 10 eligible members." },
                { bold: "Commander Certification Areas: ", text: "Includes spaces for commander information, signatures, and dates." },
                { bold: "Air Force Branding: ", text: "Incorporates official Air Force Personnel Center logo and formatting." }
            ]
        },
        {
            title: "BTZ CANDIDATE IDENTIFICATION",
            description: "Below-the-Zone candidates receive specialized processing:",
            points: [
                { bold: "Accelerated Timeline Calculations: ", text: "Applies the 22-month TIG calculations instead of standard 28-month requirement." },
                { bold: "Cutoff Date Comparisons: ", text: "Evaluates candidates against both the February cutoff and the SCOD date." },
                { bold: "Special Reporting: ", text: "Flags BTZ-eligible airmen for separate consideration." },
                { bold: "Distinct Categorization: ", text: "Ensures BTZ candidates are tracked separately in the system for proper handling." }
            ]
        },
        {
            title: "SMALL UNIT MANAGEMENT",
            description: "The system addresses the unique challenges of units with limited eligible personnel:",
            points: [
                { bold: "Automated Detection: ", text: "Identifies units with fewer than 10 eligible members." },
                { bold: "Cross-Unit Consolidation: ", text: "Supports the requirement to combine small units for promotion consideration." },
                { bold: "SRID-Based Grouping: ", text: "Maps PAS codes to appropriate SRIDs for aggregation." },
                { bold: "Leadership Visibility: ", text: "Provides clear reporting on which units require consolidation." },
                { bold: "Allocation Adjustment: ", text: "Ensures proper MP/PN allocations when units are combined." }
            ]
        }
    ];

    const sections3 = [
        {
            title: "UNIT ROSTER MANAGEMENT",
            description: "This feature provides comprehensive oversight of personnel across the organizational structure:",
            points: [
                { bold: "PAS Code Organization: ", text: "Systematically organizes service members by their assigned PAS (Personnel Accounting Symbol) codes, maintaining proper command hierarchies." },
                { bold: "Unit Recognition: ", text: "Maps PAS codes to their official unit names (ASSIGNED_PAS_CLEARTEXT), providing human-readable identification." },
                { bold: "Hierarchical Grouping: ", text: "Maintains proper organizational relationships between squadrons, groups, and wings." },
                { bold: "Personnel Tracking: ", text: "Monitors total eligible members per unit for accurate promotion allocation." },
                { bold: "Command Structure Integration: ", text: "Associates units with their leadership teams and appropriate SRIDs (Senior Rater IDs)." }
            ]
        },
        {
            title: "DATA VALIDATION",
            description: "The system employs robust validation to ensure data integrity:",
            points: [
                { bold: "Required Field Verification: ", text: "Automatically checks that all mandatory fields (name, grade, DOR, etc.) are present for each record." },
                { bold: "Format Standardization: ", text: "Ensures dates follow military standard format (DD-MMM-YYYY) with proper capitalization." },
                { bold: "Error Flagging: ", text: "Identifies specific problematic records with precise error locations (index and column)." },
                { bold: "Alpha Roster Compatibility: ", text: "Validates that uploaded files contain all required columns for processing." },
                { bold: "Timestamp Conversion: ", text: "Properly handles Excel date formats and converts them to standard string formats." }
            ]
        },
        {
            title: "INELIGIBILITY TRACKING",
            description: "The system provides clear documentation for non-eligible personnel:",
            points: [
                { bold: "Specific Reason Codes: ", text: "Assigns precise reasons for ineligibility (TIG, TIS, Higher Tenure, UIF, etc.)." },
                { bold: "RE Code Translation: ", text: "Converts cryptic reenlistment codes to plain language explanations." },
                { bold: "Personnel Accountability: ", text: "Maps ineligibility reasons to individual service members via index tracking." },
                { bold: "Documentation Support: ", text: "Provides required justification for excluding members from promotion consideration." },
                { bold: "Audit Trail: ", text: "Maintains record of why each ineligible member was excluded for leadership review." }
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <style>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                }
                
                .section-card {
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .section-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #137bec, #0056b3);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }
                
                .section-card:hover::before {
                    transform: scaleX(1);
                }
                
                .section-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                
                .bullet-point {
                    position: relative;
                    padding-left: 2rem;
                }
                
                .bullet-point::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: #137bec;
                    font-weight: bold;
                    font-size: 1.2rem;
                }
                
                .hero-pattern {
                    background-image: 
                        linear-gradient(30deg, #f0f9ff 12%, transparent 12.5%, transparent 87%, #f0f9ff 87.5%, #f0f9ff),
                        linear-gradient(150deg, #f0f9ff 12%, transparent 12.5%, transparent 87%, #f0f9ff 87.5%, #f0f9ff),
                        linear-gradient(30deg, #f0f9ff 12%, transparent 12.5%, transparent 87%, #f0f9ff 87.5%, #f0f9ff),
                        linear-gradient(150deg, #f0f9ff 12%, transparent 12.5%, transparent 87%, #f0f9ff 87.5%, #f0f9ff),
                        linear-gradient(60deg, #e0f2fe 25%, transparent 25.5%, transparent 75%, #e0f2fe 75%, #e0f2fe),
                        linear-gradient(60deg, #e0f2fe 25%, transparent 25.5%, transparent 75%, #e0f2fe 75%, #e0f2fe);
                    background-size: 20px 35px;
                    background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
                }
            `}</style>
            
            <Header />
            
            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <div className="bg-blue-950 py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-25"></div>
                    <div className="relative flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-8 animate-fade-in-up">
                            How To Use
                        </h1>
                        <div className="max-w-3xl mx-auto px-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            <p className="text-lg text-white leading-relaxed text-center">
                                To use the MEL generators effectively, it is important to understand some of the nuances of our processors. There
                                are a number of columns that are required in order for us to process your initial-MEL and final-MEL documents with machine-like precision. There 
                                are also optional columns that can include additional levels of processing. It is assumed that whoever is using our system has 
                                a base level of understanding of the initial and final MEL processes and terminologies, but below are some additional resources to help you 
                                better understand.
                            </p>
                        </div>
                    </div>
                </div>

                {/* First Section Group */}
                <div className="max-w-6xl mx-auto px-8 py-16">
                    <div className="grid gap-8">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                ref={el => {
                                    if (el) sectionRefs.current[index] = el;
                                }}
                                className="section-card bg-white rounded-xl shadow-lg p-8 opacity-0"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <h2 className="text-3xl font-bold text-[#137bec] mb-4 flex items-center">
                                    <span className="w-12 h-12 bg-gradient-to-br from-[#137bec] to-[#0056b3] rounded-lg flex items-center justify-center text-white mr-4">
                                        {index + 1}
                                    </span>
                                    {section.title}
                                </h2>
                                <p className="text-gray-700 mb-6 text-lg">{section.description}</p>
                                <div className="space-y-4">
                                    {section.points.map((point, pointIndex) => (
                                        <div key={pointIndex} className="bullet-point text-gray-600 leading-relaxed">
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Blue Banner 1 */}
                <div className="relative bg-gradient-to-r from-blue-950 to-blue-900 py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
                    
                    <div className="relative max-w-6xl mx-auto px-8 flex items-center justify-between">
                        <div className="w-1/4 flex items-center justify-center">
                            <img className="w-32 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" src={afwnbg} alt="Air Force Logo" />
                        </div>
                        <div className="w-1/2 text-center">
                            <p className="text-white text-lg leading-relaxed font-light">
                                These features are specifically tailored to the unique requirements of Air Force promotion processes, ensuring all eligibility determinations strictly follow current regulations and policies.
                            </p>
                        </div>
                        <div className="w-1/4 flex items-center justify-center">
                            <img className="w-32 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" src={afwnbg} alt="Air Force Logo" />
                        </div>
                    </div>
                </div>

                {/* Second Section Group */}
                <div className="max-w-6xl mx-auto px-8 py-16">
                    <div className="grid gap-8">
                        {sections2.map((section, index) => (
                            <div
                                key={index}
                                ref={el => {
                                    if (el) sectionRefs.current[sections.length + index] = el;
                                }}
                                className="section-card bg-white rounded-xl shadow-lg p-8 opacity-0"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <h2 className="text-3xl font-bold text-[#137bec] mb-4 flex items-center">
                                    <span className="w-12 h-12 bg-gradient-to-br from-[#137bec] to-[#0056b3] rounded-lg flex items-center justify-center text-white mr-4">
                                        {sections.length + index + 1}
                                    </span>
                                    {section.title}
                                </h2>
                                <p className="text-gray-700 mb-6 text-lg">{section.description}</p>
                                <div className="space-y-4">
                                    {section.points.map((point, pointIndex) => (
                                        <div key={pointIndex} className="bullet-point text-gray-600 leading-relaxed">
                                            <span className="font-semibold text-gray-800">{point.bold}</span>
                                            {point.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Blue Banner 2 */}
                <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-800 opacity-20"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
                    
                    <div className="relative max-w-6xl mx-auto px-8 flex items-center justify-between">
                        <div className="w-1/4 flex items-center justify-center">
                            <img className="w-32 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" src={afwnbg} alt="Air Force Logo" />
                        </div>
                        <div className="w-1/2 text-center">
                            <p className="text-white text-lg leading-relaxed font-light">
                                These core functionalities work together to create a comprehensive system that dramatically reduces administrative burden while ensuring full compliance with Air Force promotion regulations.
                            </p>
                        </div>
                        <div className="w-1/4 flex items-center justify-center">
                            <img className="w-32 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" src={afwnbg} alt="Air Force Logo" />
                        </div>
                    </div>
                </div>

                {/* Third Section Group */}
                <div className="max-w-6xl mx-auto px-8 py-16">
                    <div className="grid gap-8">
                        {sections3.map((section, index) => (
                            <div
                                key={index}
                                ref={el => {
                                    if (el) sectionRefs.current[sections.length + sections2.length + index] = el;
                                }}
                                className="section-card bg-white rounded-xl shadow-lg p-8 opacity-0"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <h2 className="text-3xl font-bold text-[#137bec] mb-4 flex items-center">
                                    <span className="w-12 h-12 bg-gradient-to-br from-[#137bec] to-[#0056b3] rounded-lg flex items-center justify-center text-white mr-4">
                                        {sections.length + sections2.length + index + 1}
                                    </span>
                                    {section.title}
                                </h2>
                                <p className="text-gray-700 mb-6 text-lg">{section.description}</p>
                                <div className="space-y-4">
                                    {section.points.map((point, pointIndex) => (
                                        <div key={pointIndex} className="bullet-point text-gray-600 leading-relaxed">
                                            <span className="font-semibold text-gray-800">{point.bold}</span>
                                            {point.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}

export default HowToPage;
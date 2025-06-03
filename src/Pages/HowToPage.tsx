import Footer from "../Components/Footer";
import Header from "../Components/Header";
import fjoutline from '../assets/fjoutline.png'
import afwnbg from '../assets/af-white-nbg.png'

const HowToPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <div className="flex flex-col items-center justify-center py-8">
                    <h1 className="text-5xl font-poppins tracking-widest text-[#137bec]">How To Use</h1>
                    <div className="flex items-center justify-center max-w-[50vw] py-8">
                        <p className="">
                            To use the mel generators effectively, it is important to understand some of the nuances of our processors. There
                            are a number of columns that are required in order for us to process your initial-mel and final-mel documents with machine-like precision. There 
                            are also optional columns that can include additional levels of proccessing. It is assumed that whoever is using our system has 
                            a base level of understanding of the initial and final mel processes and terminologies, but below are some additional resources to help you 
                            better understand.
                        </p>
                    </div>
                </div>
                <div className="w-[50vw] mx-auto space-y-8 pb-8">
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            SCOD MANAGEMENT
                        </h1>
                        <p className="pb-4">
                            The Static Closeout Date (SCOD) is a system central to the Air Force's performance evaluation and promotion cycles. Our application:
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Maintains the official SCOD calendar for each rank (31 March for SrA, 31 January for SSgt, etc.).
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Aligns eligibility calculations with the correct evaluation cycle for each rank.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span>Ensures all promotion decisions follow the appropriate timing based on AFPC guidelines.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Synchronizes promotion consideration with EPR closeout dates as required by AFI 36-2406.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            ACCOUNTING DATE CALCULATIONS
                        </h1>
                        <p className="pb-4">
                            Personnel mobility can be a challenge for promotion eligibility, but we take care of it for you.
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Automatically calculates the 120-day cutoff date for each SCOD period
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Determines if recently PCS'd members meet station stability requirements.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span>Adjusts dates appropriately to account for the exact 120-day requirement (minus 1 day).
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Provides clear documentation of eligibility/ineligibility for members who have recently changed stations.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            HIGHER TENURE TRACKING
                        </h1>
                        <p className="pb-4">
                            Career progression limits are carefully tracked:                        
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Implements standard High Year of Tenure (HYT) policies per rank (10 years for SrA, 20 for SSgt, etc.).
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Automatically adjusts for the special exception period between December 2023 and September 2026.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span>Applies the 2-year HYT extension for eligible members during the exception period.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Prevents consideration of members who would hit HYT before promotion can take effect.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            CAFSC SKILL LEVEL VERIFICATION
                        </h1>
                        <p className="pb-4">
                            Career field progression requirements are strictly enforced:                       
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Verifies that members have the minimum required skill level for their current rank (5-level for SSgt, 7-level for TSgt, etc.).
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Checks primary CAFSC first, then examines secondary AFSCs when necessary
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span>Handles both 5-digit and 6-digit AFSC formats correctly.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Screens out Special Duty AFSCs (8XXXX and 9XXXX) that require special handling.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            PROMOTION ALLOCATION CALCULATOR
                        </h1>
                        <p className="pb-4">
                            Streamlines the critical allocation of promotion recommendations:                      
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Calculates exact Must Promote (MP) and Promote Now (PN) quotas based on official tables.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Supports both E4 (SrA) allocation rates and the different E5-E6 (SSgt/TSgt) allocation tables.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span>Adjusts allocations automatically as unit size changes due to PCS/reassignments.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span>Ensures compliance with forced distribution guidelines in AFI 36-2406.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-blue-950 h-[15vh] flex items-center justify-center">
                    <div className="w-[25vw] flex items-center justify-center">
                        <img className="w-full max-h-20 object-contain" src={afwnbg} />
                    </div>
                    <div className="max-w-[50vw] font-poppins text-white">
                        <p>These features are specifically tailored to the unique requirements of Air Force promotion processes, ensuring all eligibility determinations strictly follow current regulations and policies.</p>
                    </div>
                    <div className="w-[25vw] flex items-center justify-center">
                        <img className="w-full max-h-20 object-contain" src={afwnbg} />
                    </div>
                </div>
                <div className="w-[50vw] mx-auto space-y-8 py-8">
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            AUTOMATED ELIGIBILITY PROCESSING
                        </h1>
                        <p className="pb-4">
                            This cornerstone feature transforms what would otherwise be a manual, error-prone process into a streamlined operation.                        
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Comprehensive Data Analysis: </span>Automatically processes the entire Alpha Roster to systematically evaluate every service member against promotion criteria.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Rank-Specific Processing: </span>Applies different rule sets based on the target promotion cycle (SrA, SSgt, TSgt, MSgt, SMSgt).
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Multi-Factor Evaluation: </span>Simultaneously checks multiple eligibility factors including DOR (Date of Rank), TAFMSD (Total Active Federal Military Service Date), reenlistment codes, disciplinary status, and AFSC requirements.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Categorized Results: </span>Automatically sorts personnel into appropriate categories (eligible, ineligible, BTZ eligible) with no manual intervention.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Batch Processing Capability: </span> Handles hundreds of records in seconds, eliminating days of manual review work.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            CUSTOMIZED ELIGIBILITY CRITERIA
                        </h1>
                        <p className="pb-4">
                            The system implements the complex promotion eligibility rules with precision:                       
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Time-in-Grade Requirements: </span>Enforces specific TIG minimums (6 months for SrA, 23 months for SSgt, etc.).
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Time-in-Service Calculations: </span>Validates members meet minimum TIS requirements (3 years for SrA, 5 years for SSgt, etc.).
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Disciplinary Status Integration: </span>Automatically flags and excludes members with active UIFs or disqualifying RE codes.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Special Handling for A1C to SrA: </span>Includes unique processing for standard (28 months) and BTZ (22 months) promotion eligibility.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Dynamic Criteria Adaptation: </span>Framework allows for easy updates when Air Force promotion criteria change.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            PDF REPORT GENERATION
                        </h1>
                        <p className="pb-4">
                            The system produces professional, standardized documentation required for the promotion process:                       
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Master Eligibility List (MEL): </span>Generates the official roster of eligible candidates with all required information.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Ineligibility Documentation: </span>Creates detailed reports of ineligible members with specific reasons for ineligibility.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Unit-Specific Reports: </span>Organizes reports by PAS codes and command structures.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Small Unit Reports: </span>Special handling for units with fewer than 10 eligible members.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Commander Certification Areas: </span>Includes spaces for commander information, signatures, and dates.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Air Force Branding: </span>Incorporates official Air Force Personnel Center logo and formatting.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            BTZ CANDIDATE IDENTIFICATION
                        </h1>
                        <p className="pb-4">
                            Below-the-Zone candidates receive specialized processing:                  
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Accelerated Timeline Calculations: </span>Applies the 22-month TIG calculations instead of standard 28-month requirement.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Cutoff Date Comparisons: </span>Evaluates candidates against both the February cutoff and the SCOD date.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Special Reporting: </span>Flags BTZ-eligible airmen for separate consideration.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Distinct Categorization: </span>Ensures BTZ candidates are tracked separately in the system for proper handling.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            SMALL UNIT MANAGEMENT
                        </h1>
                        <p className="pb-4">
                            The system addresses the unique challenges of units with limited eligible personnel:                       
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Automated Detection: </span>Identifies units with fewer than 10 eligible members.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Cross-Unit Consolidation: </span>Supports the requirement to combine small units for promotion consideration.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">SRID-Based Grouping: </span>Maps PAS codes to appropriate SRIDs for aggregation.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Leadership Visibility: </span>Provides clear reporting on which units require consolidation.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Allocation Adjustment: </span>Ensures proper MP/PN allocations when units are combined.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-blue-950 h-[15vh] flex items-center justify-center">
                    <div className="w-[25vw] flex items-center justify-center">
                        <img className="w-full max-h-20 object-contain" src={afwnbg} />
                    </div>
                    <div className="max-w-[50vw] font-poppins text-white">
                        <p>These core functionalities work together to create a comprehensive system that dramatically reduces administrative burden while ensuring full compliance with Air Force promotion regulations.</p>
                    </div>
                    <div className="w-[25vw] flex items-center justify-center">
                        <img className="w-full max-h-20 object-contain" src={afwnbg} />
                    </div>
                </div>
                <div className="w-[50vw] mx-auto space-y-8 py-8">
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            UNIT ROSTER MANAGEMENT
                        </h1>
                        <p className="pb-4">
                            This feature provides comprehensive oversight of personnel across the organizational structure:                        
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">PAS Code Organization: </span>Systematically organizes service members by their assigned PAS (Personnel Accounting Symbol) codes, maintaining proper command hierarchies.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Unit Recognition: </span>Maps PAS codes to their official unit names (ASSIGNED_PAS_CLEARTEXT), providing human-readable identification.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Hierarchical Grouping: </span>Maintains proper organizational relationships between squadrons, groups, and wings.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Personnel Tracking: </span>Monitors total eligible members per unit for accurate promotion allocation.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Command Structure Integration: </span>Associates units with their leadership teams and appropriate SRIDs (Senior Rater IDs).
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            DATA VALIDATION
                        </h1>
                        <p className="pb-4">
                            The system employs robust validation to ensure data integrity:                       
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Required Field Verification: </span>Automatically checks that all mandatory fields (name, grade, DOR, etc.) are present for each record.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Format Standardization: </span>Ensures dates follow military standard format (DD-MMM-YYYY) with proper capitalization.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Error Flagging: </span> Identifies specific problematic records with precise error locations (index and column).
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Alpha Roster Compatibility: </span>Validates that uploaded files contain all required columns for processing.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Timestamp Conversion: </span>Properly handles Excel date formats and converts them to standard string formats.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h1 className="text-3xl font-military tracking-widest text-[#137bec] pb-4">
                            INELIGIBILITY TRACKING
                        </h1>
                        <p className="pb-4">
                            The system provides clear documentation for non-eligible personnel:                 
                        </p>
                        <ul className="px-5 space-y-2">
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Specific Reason Codes: </span>Assigns precise reasons for ineligibility (TIG, TIS, Higher Tenure, UIF, etc.).
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">RE Code Translation: </span>Converts cryptic reenlistment codes to plain language explanations.
                            </li>
                            <li>
                               <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Personnel Accountability: </span>Maps ineligibility reasons to individual service members via index tracking.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Documentation Support: </span>Provides required justification for excluding members from promotion consideration.
                            </li>
                            <li>
                                <span className="font-poppins font-bold text-[#137bec]">• </span><span className="font-bold">Audit Trail: </span>Maintains record of why each ineligible member was excluded for leadership review.
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HowToPage;
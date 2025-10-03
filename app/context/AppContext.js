'use client';
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, useState, useRef, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const STORAGE_KEYS = {
  PENDING_LETTERS: "pendingLetters",
  RECENT_LETTERS: "recentLetters",
};
const DEFAULT_FORM_DATA = {
  candidateName: "",
  jobTitle: "",
  joiningDate: "",
  location: "",
  salary: "",
  hrManagerName: "",
  employmentType: "Full-time",
  companyName: "The Salon Company",
  companyAddress: "Lokaci H.Q., Sector 117, Noida",
  companyPhone: "(555) 123-4567",
  companyEmail: "hr@lokaci.com",
  probationPeriod: "90 days",
  workingHours: "Monday to Friday, 9:00 AM to 6:00 PM",
  offerDeadline: "2 weaks",
  officeHours: "Monday - Friday, 9:00 AM - 5:00 PM",
  whatToExpect: [
    'Comprehensive onboarding program during your first week',
    'Access to company benefits and professional development opportunities',
    'Collaborative work environment with experienced team members',
    'Regular performance reviews and career growth discussions',
  ],
  termsEmployment: [
    'This offer is contingent upon successful completion of background verification',
    'The first 90 days will be considered a probationary period',
    'Either party may terminate employment with appropriate notice',
  ],
  termsCompensation: [
    'Salary will be paid monthly as per company payroll schedule',
    'Eligible for annual performance-based salary review',
    'Health insurance coverage effective from your start date',
    'Paid time off as per company policy',
    'Professional development and training opportunities',
  ],
  termsCompliance: [
    'Required to sign confidentiality agreement',
    'Acknowledgment of company policies and procedures',
    'Compliance with all applicable laws and regulations',
  ],
  termsWorkArrangements: [
    'Standard working hours: Monday to Friday, 9:00 AM to 6:00 PM',
    'Reporting structure and team assignments will be provided',
    'Remote work options available as per company policy',
  ],
  importantNotes: 'Please review all terms carefully. Any changes to this offer must be made in writing and signed by both parties. If you have any questions, please contact our HR department.',
  acceptanceDeadline: 'Invalid Date',
  documentsRequired: [
    'Government-issued photo identification',
    'Educational certificates and transcripts',
    'Previous employment certificates (if applicable)',
    'Address proof documents',
    'Bank account details for salary processing',
  ],
  hrEmail: 'hr@lokaci.com',
  hrPhone: '(555) 123-4567',
  hrTiming: 'Monday - Friday, 9:00 AM - 5:00 PM',
  candidateNameAcceptance: 'ekjds',
  acceptanceDate: '___________',
};

export const AppProvider = ({ children }) => {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  const [category, setCategory] = useState("Full-Time");
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [pendingLetters, setPendingLetters] = useState([]);
  // const [recentLetters, setRecentLetters] = useState([]);
  const [theme, setTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [letters, setLetters] = useState([]);

  const pdfMakeRef = useRef(null);

  const router = useRouter();
  const previewRef = useRef();
  const fieldRefs = useRef({});


  useEffect(() => {
    axios.get("/api/offers")
      .then(res => {
        setLetters(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching offers:", err);
        setLoading(false);
      });
  }, []);
  
  //DELETE Letter from the database
  const deleteLetter = useCallback(
    async (id) => {
      try {
        await axios.delete(`/api/offers/${id}`);
        setLetters((prev) => prev.filter((letter) => letter._id !== id));
        toast.success("Letter Deleted Successfully!")
        console.log("Letter deleted:", id);
      } catch (err) {
        toast.error("something went wrong");
        console.error("Error deleting letter:", err.response?.data || err.message);
      }
    },
    [setLetters] // dependencies
  );

  //get Letter from for updation
  // useEffect(() => {
  //   if (id) {
  //     axios.get(`/api/offers/${id}`)
  //       .then((res) => setFormData(res.data))
  //       .catch((err) => console.error("Error fetching offer:", err));
  //   }
  // }, [id]);



  // console.log(letters);

  const getStorageItem = useCallback((key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage (${key}):`, error);
      return defaultValue;
    }
  }, []);

  const setStorageItem = useCallback((key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage (${key}):`, error);
    }
  }, []);

  const resetFormData = useCallback(() => {
    setFormData({
      ...DEFAULT_FORM_DATA,
      candidateName: "",
      jobTitle: "",
      joiningDate: "",
      location: "",
      salary: "",
      hrManagerName: ""
    });
  }, []);

  useEffect(() => {
    if (activeField && fieldRefs.current[activeField]) {
      fieldRefs.current[activeField].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeField]);

  useEffect(() => {
    const saved = getStorageItem(STORAGE_KEYS.PENDING_LETTERS, []);
    console.log('Loading pending letters on mount:', saved);
    setPendingLetters(saved);
  }, [getStorageItem]);

  // useEffect(() => {
  //   const saved = getStorageItem(STORAGE_KEYS.RECENT_LETTERS, []);
  //   console.log('Loading recent letters on mount:', saved);
  //   setRecentLetters(saved);
  // }, [getStorageItem]);


  useEffect(() => {
    console.log('Saving pending letters to localStorage:', pendingLetters);
    setStorageItem(STORAGE_KEYS.PENDING_LETTERS, pendingLetters);
  }, [pendingLetters, setStorageItem]);

  // useEffect(() => {
  //   console.log('Saving recent letters to localStorage:', recentLetters);
  //   setStorageItem(STORAGE_KEYS.RECENT_LETTERS, recentLetters);
  // }, [recentLetters, setStorageItem]);


  const handleInputChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setActiveField(field);
  }, []);

  const savePendingLetter = useCallback(() => {
    if (!formData.candidateName?.trim()) {
      toast.error("Candidate Name is required.");
      return;
    }

    const newLetter = {
      id: Date.now(),
      ...formData,
      category,
      savedAt: new Date().toISOString()
    };

    setPendingLetters((prev) => {
      const updatedLetters = [newLetter, ...prev];
      console.log('Saving pending letter:', newLetter);
      console.log('Updated pending letters:', updatedLetters);
      return updatedLetters;
    });
    toast.success("Letter saved to pending!");
    resetFormData();
  }, [formData, category, resetFormData]);

  const deletePendingLetter = useCallback((id) => {
    setPendingLetters((prev) => {
      const updatedLetters = prev.filter((letter) => letter.id !== id);
      console.log('Deleting pending letter with id:', id);
      console.log('Updated pending letters after delete:', updatedLetters);
      return updatedLetters;
    });
    toast.info("Letter removed from pending.");
  }, []);

  const editPendingLetter = useCallback((id) => {
    const letter = pendingLetters.find((l) => l.id === id);
    if (letter) {
      setFormData(letter);
      setCategory(letter.category || "Full-Time");
      deletePendingLetter(id);
      router.push("/generator");
    }
  }, [pendingLetters, deletePendingLetter, router]);


  // const deleteAllRecentLetters = useCallback(() => {
  //   setRecentLetters([]);
  //   localStorage.removeItem(STORAGE_KEYS.RECENT_LETTERS);
  //   toast.info("All recent letters have been removed.");
  // }, []);


  const validateRequiredFields = useCallback(() => {
    const requiredFields = [
      'candidateName', 'jobTitle', 'joiningDate', 'location', 'salary',
      'hrManagerName', 'employmentType', 'companyName', 'companyAddress',
      'companyPhone', 'companyEmail', 'probationPeriod', 'workingHours', 'officeHours'
    ];

    return requiredFields.every(field => formData[field]?.toString().trim());
  }, [formData]);

  const loadImage = useCallback(async (src) => {
    try {
      return await new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Image load error"));
        img.src = src;
      });
    } catch (err) {
      const resp = await fetch(src);
      const blob = await resp.blob();
      const dataUrl = await new Promise((resolve) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result);
        fr.readAsDataURL(blob);
      });
      return loadImage(dataUrl);
    }
  }, []);

  // const saveToRecentLetters = useCallback(() => {
  //   const newLetter = {
  //     id: Date.now(),
  //     candidateName: formData.candidateName,
  //     jobTitle: formData.jobTitle,
  //     joiningDate: formData.joiningDate,
  //     location: formData.location,
  //     salary: formData.salary,
  //     hrManagerName: formData.hrManagerName,
  //     category,
  //     generatedAt: new Date().toISOString(),
  //   };

  //   console.log('Adding new recent letter:', newLetter);
  //   setRecentLetters(prev => {
  //     const updatedLetters = [newLetter, ...prev];
  //     console.log('Updated recent letters state:', updatedLetters);
  //     return updatedLetters;
  //   });

  //   resetFormData();
  // }, [formData, category, resetFormData]);

  const generatePDF = useCallback(async () => {
    if (!validateRequiredFields()) {
      toast.error("Please fill in all required fields before generating the letter.");
      return;
    }

    try {
      // Show the loader
      setIsLoading(true);

      // Wait for 1.5 seconds before generating the PDF
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (!pdfMakeRef.current) {
        const pdfMakeModule = await import('pdfmake/build/pdfmake');
        const pdfFonts = await import('pdfmake/build/vfs_fonts');
        pdfMakeModule.default.vfs = pdfFonts.default.vfs;
        pdfMakeRef.current = pdfMakeModule.default;
      }


      const fetchLogoBase64 = async (url) => {
        const res = await fetch(url);
        const blob = await res.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      };

      const logoBase64 = await fetchLogoBase64('/images/logo.png');

      const {
        candidateName,
        jobTitle,
        joiningDate,
        location,
        salary,
        hrManagerName,
        companyName,
        companyAddress,
        companyPhone,
        companyEmail,
        employmentType,
        // workingHours,
        // officeHours,
        documentsRequired,
        description1,
        whatToExpect,
        termsEmployment,
        termsCompensation,
        termsCompliance,
        termsWorkArrangements,
        importantNotes,
        // acceptanceDeadline,
        acceptanceDate,
        candidateNameAcceptance,
        hrEmail,
        hrPhone,
        hrTiming,
      } = formData;

      //document defination
      const docDefinition = {
        pageMargins: [40, 150, 40, 60],

        background: (currentPage, pageSize) => ({
          image: logoBase64,
          width: 200,
          opacity: 0.08,
          absolutePosition: {
            x: (pageSize.width - 200) / 2,
            y: (pageSize.height - 200) / 2,
          }
        }),

        header: (currentPage, pageCount, pageSize) => ({
          margin: [40, 20, 40, 0],
          stack: [
            { image: logoBase64, width: 40, alignment: 'center', margin: [0, 0, 0, 5] },
            { text: companyName, style: 'header', alignment: 'center', margin: [0, 0, 0, 3] },
            { text: companyAddress, style: 'subheader', alignment: 'center', margin: [0, 0, 0, 3] },
            { text: `Phone: ${companyPhone} | Email: ${companyEmail}`, style: 'small', alignment: 'center', margin: [0, 0, 0, 3] },
            {
              canvas: [
                {
                  type: 'line',
                  x1: 0,
                  y1: 0,
                  x2: pageSize.width - 100,
                  y2: 0,
                  lineWidth: 1,
                  lineColor: '#cccccc'
                }
              ],
              margin: [0, 5, 0, 10]
            }
          ]
        }),


        footer: (currentPage, pageCount) => ({
          columns: [
            {
              text: companyName,
              alignment: 'left',
              style: 'footerText',
              margin: [40, 10]
            },
            {
              text: `Page ${currentPage} of ${pageCount}`,
              alignment: 'right',
              style: 'footerText',
              margin: [0, 10, 40, 0]
            }
          ]
        }),

        content: [
          { text: `Offer Letter`, style: 'title', alignment: 'center', margin: [0, 0, 0, 20] },

          { text: `Dear ${candidateName},`, margin: [0, 0, 0, 10] },
          { text: description1, margin: [0, 0, 0, 10] },

          {
            text: [
              `We are pleased to offer you the role of `,
              { text: jobTitle, bold: true },
              ` at our ${location} office, starting on `,
              { text: joiningDate, bold: true },
              `. This is a `,
              { text: employmentType, bold: true },
              ` position with a monthly salary of `,
              { text: `₹${salary}`, bold: true },
              `.`
            ],
            margin: [0, 0, 0, 10]
          },

          { text: 'What to Expect:', style: 'subheader' },
          { ul: whatToExpect, margin: [0, 0, 0, 10] },

          { text: 'Terms and Conditions', style: 'subheader', margin: [0, 20, 0, 10] },

          { text: '1. Employment Terms:', bold: true, margin: [0, 5, 0, 5] },
          { ul: termsEmployment, margin: [0, 0, 0, 10] },

          { text: '2. Compensation & Benefits:', bold: true, margin: [0, 5, 0, 5] },
          { ul: termsCompensation, margin: [0, 0, 0, 10] },

          { text: '3. Confidentiality & Compliance:', bold: true, margin: [0, 5, 0, 5] },
          { ul: termsCompliance, margin: [0, 0, 0, 10] },

          { text: '4. Work Arrangements:', bold: true, margin: [0, 5, 0, 5] },
          { ul: termsWorkArrangements, margin: [0, 0, 0, 10] },

          { text: importantNotes, italics: true, margin: [0, 10, 0, 20] },

          { text: 'Documents Required (Please bring on first day):', style: 'subheader' },
          { ul: documentsRequired, margin: [0, 0, 0, 20] },

          { text: 'Contact Information:', style: 'subheader' },
          {
            ul: [
              `Email: ${hrEmail}`,
              `Phone: ${hrPhone}`,
              `Availability: ${hrTiming}`
            ],
            margin: [0, 0, 0, 20]
          },

          { text: 'Candidate Acceptance', style: 'subheader' },
          { text: `I, ${candidateNameAcceptance}, accept the terms and conditions of this employment offer as outlined above.`, margin: [0, 5, 0, 20] },

          { text: 'Candidate Signature', margin: [0, 0, 0, 30] },
          { text: `Date: ${acceptanceDate || '___________'}`, margin: [0, 0, 0, 40] },

          { text: "Sincerely,", margin: [0, 0, 0, 5] },
          { text: hrManagerName, bold: true },
          { text: companyName },
        ],

        styles: {
          header: {
            fontSize: 18,
            bold: true
          },
          subheader: {
            fontSize: 14,
            bold: true
          },
          small: {
            fontSize: 10,
            color: 'gray'
          },
          title: {
            fontSize: 16,
            bold: true,
            decoration: 'underline'
          },
          footerText: {
            fontSize: 9,
            color: '#888888'
          }
        }
      };

      const safeCandidateName = candidateName?.replace(/\s+/g, "_") || 'Candidate';
      const filename = `${safeCandidateName}_Offer_Letter_${new Date().toISOString().split('T')[0]}.pdf`;

      pdfMakeRef.current.createPdf(docDefinition).download(filename);

      // ✅ Save to database (add or update)
      if (formData._id) {
        // Update existing letter
        await axios.put(`/api/offers/${formData._id}`, {
          ...formData,
          updatedAt: new Date().toISOString(),
        });
        toast.success("PDF updated & Offer Letter saved to database!");
      } else {
        // Create new letter
        await axios.post("/api/offers", {
          ...formData,
          generatedAt: new Date().toISOString(),
        });
        toast.success("PDF generated & Offer Letter saved to database!");
      }

      setFormData(DEFAULT_FORM_DATA);

    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Something went wrong while generating the PDF.");
    } finally {
      // Hide the loader no matter what
      setIsLoading(false);
    }
  }, [formData, validateRequiredFields]);


  const contextValue = useMemo(() => ({
    category,
    setCategory,
    formData,
    setFormData,
    handleInputChange,
    savePendingLetter,
    deletePendingLetter,
    editPendingLetter,
    // deleteAllRecentLetters,
    generatePDF,
    previewRef,
    pendingLetters,
    // recentLetters,
    activeField,
    setActiveField,
    fieldRefs,
    theme,
    isLoading,
    setTheme,
    letters,
    loading,
    deleteLetter
  }), [
    category,
    formData,
    handleInputChange,
    savePendingLetter,
    deletePendingLetter,
    editPendingLetter,
    // deleteAllRecentLetters,
    generatePDF,
    pendingLetters,
    // recentLetters,
    activeField,
    theme,
    isLoading,
    letters,
    loading,
    deleteLetter

  ]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
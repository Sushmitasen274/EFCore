$(document).ready(function () {
    var translations = {
        "en": {
            "Customer": "Customer",
            "Vendor": "Vendor",
            "Employee": "Employee",
            "Local/Central": "Local/Central",
            "Category": "Category",
            "Party Code": "Party Code",
            "Party Type": "Party Type",
            "Party Name": "Party Name",
            "Communication Address": "Communication Address",
            "Permanent Address": "Permanent Address",
            "Contact Person Name": "Contact Person Name",
            "Mobile No.": "Mobile No.",
            "Email Id": "Email Id",
            "Liability Account Code": "Liability Account Code",
            "Advance Account Code": "Advance Account Code",
            "Notes": "Notes",
            "Location": "Location",
            "Notes": "Notes",
            "Credit Period": "Credit Period",
            "State": "State",
            "Status": "Status",
            "Active Till": "Active Till",
            "Party Master": "Party Master",
            "Back": "Back",
            "Bank Details": "Bank Details",
            "Bank Name": "Bank Name",
            "Branch": "Branch",
            "A/C No.": "A/C No.",
            "IFSC": "IFSC",
            "MICR": "MICR",
            "Party Tax Details": "Party Tax Details",
            "PAN": "PAN",
            "TAN": "TAN",
            "Service Tax Regn No.": "Service Tax Regn No.",
            "GST Regn No.": "GST Regn No.",
            "Save": "Save",
            "IFSC": "IFSC",
            "MICR": "MICR",
            "Vat/TIN .": "Vat/TIN ."
            // Add more translations for English here
        },

        "hi": {
            "Customer": "ग्राहक",
            "Vendor": "विक्रेता",
            "Employee": "कर्मचारी",
            "Local/Central": "स्थानीय/केंद्रीय",
            "Category": "श्रेणी",
            "Party Code": "पार्टी कोड",
            "Party Type": "पार्टी प्रकार",
            "Party Name": "पार्टी का नाम",
            "Communication Address": "संचार पता",
            "Permanent Address": "स्थायी पता",
            "Contact Person Name": "संपर्क व्यक्ति का नाम",
            "Mobile No.": "मोबाइल नंबर",
            "Email Id": "ईमेल आईडी",
            "Liability Account Code": "दायित्व खाता कोड",
            "Advance Account Code": "अग्रिम खाता कोड",
            "Notes": "टिप्पणियाँ",
            "Location": "स्थान",
            "Credit Period": "क्रेडिट अवधि",
            "State": "राज्य",
            "Status": "स्थिति",
            "Active Till": "सक्रिय तक",
            "Party Master": "पार्टी मास्टर",
            "Back": "वापस",
            "Bank Details": "बैंक विवरण",
            "Bank Name": "बैंक का नाम",
            "Branch": "शाखा",
            "A/C No.": "खाता नंबर",
            "Party Tax Details": "पार्टी कर विवरण",
            "PAN": "पैन",
            "TAN": "टैन",
            "Service Tax Regn No.": "सेवा कर पंजीकरण संख्या",
            "GST Regn No.": "जीएसटी पंजीकरण संख्या",
            "Save": "सहेजें",
           "IFSC": "आईएफएससी",
            "MICR": "एमआईसीआर",
            "Vat/TIN .": "वैट/ टीआईएन"

            // Add more translations for Hindi here
        },




    };

    // Function to translate labels and buttons
    function translateLabels(language) {
        $('[data-translate]').each(function () {
            var labelText = $(this).data('translate');
            var translatedText = translations[language][labelText];
            if (translatedText) {
                if ($(this).is("button")) {
                    // If the element is a button, set its text content
                    $(this).text(translatedText);
                } else {
                    // For other elements, set their text content
                    $(this).text(translatedText);
                }
            }
        });
    }

    // Language selector change event
    $("#language-selector input[type='radio']").change(function () {

        var selectedLanguage = $("input[name='radio-switch-name']:checked").val();
        translateLabels(selectedLanguage);

    });

    // Initial translation
    var initialLanguage = $("input[name='radio-switch-name']:checked").val();
    translateLabels(initialLanguage);
});

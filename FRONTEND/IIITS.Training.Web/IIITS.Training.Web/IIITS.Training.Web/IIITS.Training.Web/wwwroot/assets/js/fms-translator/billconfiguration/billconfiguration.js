$(document).ready(function () {
    var translations = {
        "en": {
            "Bill Configuration": "Bill Configuration",
            "Type": "Type",
            "Reporting to Account Code": "Reporting to Account Code",
            "From Date:": "From Date:",
            "Applicable to": "Applicable to",
            "Applicable On": "Applicable On",
            "Consider for Fund Request": "Consider for Fund Request",
            "Percentage (%)": "Percentage (%)",
            "Flat Amount": "Flat Amount",
            "Is Statutory": "Is Statutory",
            "Allow Partial Payment": "Allow Partial Payment",
            "ACPkid": "ACPkid",
            "Type": "Type",
            "Account Code": "Account Code",
            "Is Fund Request": "Is Fund Request",
            "Percentage / Flat": "Percentage / Flat",
            "% / ₹": "% / ₹",
            "From Date": "From Date",
            "To Date": "To Date",
            "Bill Configuration Details": "Bill Configuration Details",
            "Update": "Update",
            "Back": "Back",
            "Save": "Save",
            "Main/Sub - Group": "Main/Sub - Group",
            "Bill Configuration Code": "Bill Configuration Code",
            "Maingroup Account Code": "Maingroup Account Code",
            "Remittance": "Remittance",
            "Bank Name": "Bank Name",
            "A/C No.": "A/C No.",
            "IFSC": "IFSC",
            "Branch Code": "Branch Code"
            // Add more translations for English here
        },

        "hi": {
            "Bill Configuration": "बिल कॉन्फ़िगरेशन",
            "Type": "प्रकार",
            "Reporting to Account Code": "हिसाब को रिपोर्ट करना",
            "From Date:": "तारीख से:",
            "Applicable to": "लागू होने वाला",
            "Applicable On": "पर लागू",
            "Consider for Fund Request": "निधि अनुरोध के लिए विचार करें",
            "Percentage (%)": "प्रतिशत (%)",
            "Flat Amount": "सीधी राशि",
            "Is Statutory": "कानूनी है",
            "Allow Partial Payment": "आंशिक भुगतान है",
            "ACPkid": "एसीपीके आईडी",
            "Account Code": "हिसाब कोड",
            "Is Fund Request": "निधि अनुरोध है",
            "Percentage / Flat": "प्रतिशत / सीधी",
            "% / ₹": "% / ₹",
            "From Date": "तारीख से",
            "To Date": "तारीख तक",
            "Bill Configuration Details": "बिल कॉन्फ़िगरेशन विवरण",
            "Back": "पीछे",
            "Update": "अद्यतन",
            "Save": "सहेजें",
            "Main/Sub - Group": "मुख्य/उप - समूह",
            "Bill Configuration Code": "बिल कॉन्फ़िगरेशन कोड",
            "Maingroup Account Code": "मुख्यसमूह खाता कोड",
            "Remittance": "प्रेषण",
            "Bank Name": "बैंक का नाम",
            "A/C No.": "ए/सी नंबर",
            "IFSC": "आईएफएससी",
            "Branch Code":"शाखा कोड"
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

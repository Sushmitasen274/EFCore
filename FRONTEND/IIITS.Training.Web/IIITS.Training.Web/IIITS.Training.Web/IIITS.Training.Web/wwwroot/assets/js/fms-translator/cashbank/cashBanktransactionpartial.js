$(document).ready(function () {
    var translations = {
        "en": {
            "Cash Bank Transaction": "Cash Bank Transaction",
            "Transaction Type": "Transaction Type",
            "Sys Generated CBV Number": "Sys Generated CBV Number",
            "Transaction Date": "Transaction Date",
            "Manual CB Number": "Manual CB Number",
            "Recieved Into": "Recieved Into",
            "Amount": "Amount",
            "Payment Mode": "Payment Mode",
            "Reference Doc#/UTR#": "Reference Doc#/UTR#",
            "Reference Doc Date": "Reference Doc Date",
            "BR No": "BR No",
            "BR Date": "BR Date",
            "Cheque/DD/NEFT/RTGS/Other No": "Cheque/DD/NEFT/RTGS/Other No",
            "Location": "Location",
            "Narration": "Narration",
            "Account Coden": "Account Code",
            "CBDetails Id": "CBDetails Id",
            "Debit": "Debit",
            "Credit": "Credit",
            "Schedule": "Schedule",
            "Actions":"Actions",

          

            // Add more translations for English here
        },

        "hi": {
            "Cash Bank Transaction": "नकद बैंक लेन-देन",
            "Transaction Type": "लेन-देन प्रकार",
            "Sys Generated CBV Number": "सिस्टम द्वारा उत्पन्न कैश/बैंक विवरण संख्या",
            "Transaction Date": "लेन-देन तिथि",
            "Manual CB Number": "मैनुअल कैश/बैंक विवरण संख्या",
            "Received Into": "प्राप्ति किया",
            "Amount": "राशि",
            "Payment Mode": "भुगतान मोड",
            "Reference Doc#/UTR#": "संदर्भ दस्तावेज#/यूटीआर#",
            "Reference Doc Date": "संदर्भ दस्तावेज तिथि",
            "BR No": "बीआर नंबर",
            "BR Date": "बीआर तिथि",
            "Cheque/DD/NEFT/RTGS/Other No": "चेक/डीडी/एनईएफटी/आरटीजीएस/अन्य संख्या",
            "Location": "स्थान",
            "Narration": "विवरण",
            "Account Coden": "खाता कोड",
            "CBDetails Id": "CBDetails आईडी",
            "Debit": "डेबिट",
            "Credit": "क्रेडिट",
            "Schedule": "अनुसूची",
            "Actions": "कार्रवाई",
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

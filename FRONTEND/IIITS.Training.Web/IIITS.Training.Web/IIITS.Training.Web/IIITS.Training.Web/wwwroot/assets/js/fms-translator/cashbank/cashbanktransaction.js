$(document).ready(function () {
    var translations = {
        "en": {
            "Cash Bank Transaction": "Cash Bank Transaction",
            "Transaction Type": "Transaction Type",
            "Sys Generated CBV Number": "Sys Generated CBV Number",
            "Transaction Date": "Transaction Date",
            "Manual CB Number": "Manual CB Number",
            //"Recieved Into": "Recieved Into",
            "Amount": "Amount",
            "Check Closing Balance ?": "Check Closing Balance ?",
            "Payment Mode": "Payment Mode",
            "Reference Doc#/UTR#": "Reference Doc#/UTR#",
            "Reference Doc Date": "Reference Doc Date",
            "BR No": "BR No",
            "BR Date": "BR Date",
            "Cheque/DD/NEFT/RTGS/Other No": "Cheque/DD/NEFT/RTGS/Other No",
            "Cheque/DD/NEFT/RTGS/Other Date": "Cheque/DD/NEFT/RTGS/Other Date",
            "Location": "Location",
            "Narration": "Narration",
            "Account Code": "Account Code",
            "Debit / Credit": "Debit / Credit",
            "Action": "Action",
            "Add": "Add",
            "CBDetails Id": "CBDetails Id",
            "Account Code": "Account Code",
            "Debit": "Debit",
            "Credit": "Credit",
            "Schedule": "Schedule",
            "Actions": "Actions",
            "User Comments/Remarks": "User Comments/Remarks",
            "Save Draft": "Save Draft",
            "Choose Action": "Choose Action",
            "Back": "Back",
            "Transaction Entry": "Transaction Entry",
            "Transaction Details": "Transaction Details",
            "Detail Amount": "Detail Amount :",
            "Header Amount": "Header Amount :",
            "Click Here To Upload File": "Click Here To Upload File",
            "Manual CBV Number": "Manual CBV Number",
            "Sys Generated CBV Number": "Sys Generated CBV Number",
            "Pay From": "Pay From",
            "Header Amount": "Header Amount :",
            "Created By": "Created By",
            "Created Date": "Created Date",
            "Location": "Location",
            "User Comments": "User Comments",
            "Action Name": "Action Name",
            "Inbox": "Inbox",
            "Close": "Close"
            // Add more translations for English here
        },

        "hi": {
            "Cash Bank Transaction": "नकद बैंक लेन-देन",
            "Transaction Type": "लेन-देन प्रकार",
            "Sys Generated CBV Number": "सिस्टम द्वारा उत्पन्न कैश/बैंक विवरण संख्या",
            "Transaction Date": "लेन-देन तिथि",
            "Manual CB Number": "मैनुअल कैश/बैंक विवरण संख्या",
            //"Received Into": "प्राप्ति किया",
            "Amount": "राशि",
            "Check Closing Balance ?": "समापन शेष राशि जाँचें?",
            "Payment Mode": "भुगतान मोड",
            "Reference Doc#/UTR#": "संदर्भ दस्तावेज#/यूटीआर#",
            "Reference Doc Date": "संदर्भ दस्तावेज तिथि",
            "BR No": "बीआर नंबर",
            "BR Date": "बीआर तिथि",
            "Cheque/DD/NEFT/RTGS/Other No": "चेक/डीडी/एनईएफटी/आरटीजीएस/अन्य संख्या",
            "Cheque/DD/NEFT/RTGS/Other Date": "चेक/डीडी/एनईएफटी/आरटीजीएस/अन्य तिथि",
            "Location": "स्थान",
            "Narration": "विवरण",
            "Account Code": "खाता कोड",
            "Debit / Credit": "डेबिट / क्रेडिट",
            "Action": "कार्रवाई",
            "Add": "जोड़ें",
            "CBDetails Id": "CBDetails आईडी",
            "Debit": "डेबिट",
            "Credit": "क्रेडिट",
            "Schedule": "अनुसूची",
            "Actions": "कार्रवाई",
            "User Comments/Remarks": "उपयोगकर्ता टिप्पणियाँ/टिप्पणियाँ",
            "Save Draft": "ड्राफ्ट सहेजें",
            "Choose Action": "कार्रवाई चुनें",
              "Back": "पीछे",
            "Transaction Entry": "लेन-देन प्रविष्टि",
            "Transaction Details": "लेनदेन का विवरण",
            "Detail Amount": "विवरण राशि :",
            "Header Amount": "शीर्षलेख राशि :",
            "Click Here To Upload File": "फ़ाइल अपलोड करने के लिए यहां क्लिक करें",
            "Manual CBV Number": "मैनुअल सीबीवी नंबर",
            "Sys Generated CBV Number": "Sys जेनरेटेड सीबीवी नंबर",
            "Pay From": "भुगतान करें",
            "Created By": "द्वारा बनाया गया",
            "Created Date": "बनाई गई तिथि",
            "Location": "स्थान",
            "User Comments": "उपयोगकर्ता टिप्पणियाँ",
            "Action Name": "क्रिया नाम",
            "Inbox": "इनबॉक्स",
            "Close": "बंद करें"

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

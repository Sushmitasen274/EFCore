$(document).ready(function () {
    var translations = {
        "en": {
            "Journal Voucher Transaction": "Journal Voucher Transaction",
            "JV Number": "JV Number",
            "JV Date": "JV Date",
            "Manual JV Number": "Manual JV Number",
            "JV Amount": "JV Amount",
            "JV Narration": "JV Narration",
            "Account Code": "Account Code",
            "Debit / Credit": "Debit / Credit",
            "Amount": "Amount",
            "Action": "Action",
            "Add": "Add",
            "JVDetails Id": "JVDetails Id",
            "Account Code": "Account Code",
            "Debit": "Debit",
            "Credit": "Credit",
            "Schedule": "Schedule",
            "Actions": "Actions",
            "Save Draft": "Save Draft",
            "Choose Action": "Choose Action",
            "Choose Action": "Choose Action",

              "Back": "Back",
  "Transaction Entry": "Transaction Entry",
                            "Transaction Details": "Transaction Details",
                            "Debit Amount": "Debit Amount :",
                               "Credit Amount": "Credit Amount :",
                               "Click here To upload file": "Click here To upload file",
                "User Comments/Remarks": "User Comments/Remarks",

          

            // Add more translations for English here
        },

        "hi": {
            "Journal Voucher Transaction": "जर्नल वाउचर लेन-देन",
            "JV Number": "जर्नल वाउचर नंबर",
            "JV Date": "जर्नल वाउचर तिथि",
            "Manual JV Number": "मैनुअल जर्नल वाउचर नंबर",
            "JV Amount": "जर्नल वाउचर राशि",
            "JV Narration": "जर्नल वाउचर व्याख्या",
            "Account Code": "खाता कोड",
            "Debit / Credit": "डेबिट / क्रेडिट",
            "Amount": "राशि",
            "Action": "कार्रवाई",
            "Add": "जोड़ें",
            "JVDetails Id": "जेवी विवरण आईडी",
            "Account Code": "खाता कोड",
            "Debit": "डेबिट",
            "Credit": "क्रेडिट",
            "Schedule": "अनुसूची",
            "Actions": "कार्रवाई",
            "Save Draft": "ड्राफ़्ट सहेजें",
            "Choose Action": "कार्रवाई चुनें",
             "Back": "पीछे",
             "Transaction Entry": "लेन-देन प्रविष्टि",
             "Transaction Details": "लेनदेन का विवरण",
             "Debit Amount": "निकाली गई राशि :",
             "Credit Amount": "राशि क्रेडिट करें :",
               "Click Here To Upload File": "फ़ाइल अपलोड करने के लिए यहां क्लिक करें",
                           "User Comments/Remarks": "उपयोगकर्ता टिप्पणियाँ/टिप्पणियाँ",

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

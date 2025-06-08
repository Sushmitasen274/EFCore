$(document).ready(function () {
    var translations = {
        "en": {
            "Schedule Transaction": "Schedule Transaction",
            "Reference Entries": "Reference Entries",
            "Back": "Back",
            "Account Head": "Account Head",
            "Voucher No": "Voucher No",
            "Voucher Amount": "Voucher Amount",
            "Voucher Date": "Voucher Date",
            "Narration": "Narration",
            "Vendor": "Vendor",
            "Apply": "Apply",
            "Save": "Save",
            "Delete": "Delete",
            "Add": "Add",
            "Licensee Profile  Details": "Licensee Profile  Details",
            "Transaction Type:": "Transaction Type:",
            "Reference Details": "Reference Details",
            "Ref Doc No": "Ref Doc No",
            "Ref Doc Date": "Ref Doc Date",
            "Ref Doc Date": "Ref Doc Date",
            "Amount": "Amount",
            "Entries": "Entries",
            "Originating Amount:": "Originating Amount:",
            "SCHD_DetailId": "SCHD_DetailId",
            "SCHD_MasterId": "SCHD_MasterId",
            "Ref Doc Details": "Ref Doc Details",
            "Party": "Party",
            "Amount": "Amount",
            "SCHD_PendingAmount": "SCHD_PendingAmount",
            "Adjustment Amount:": "Adjustment Amount:",
            "TransId:": "TransId",
            "Select": "Select",
            "Ref Details": "Ref Details",
            "Amount": "Amount",
            "InProcess": "InProcess",
            "Already Adjusted": "Already Adjusted",
            "Current Adjustment": "Current Adjustment",
            "Adjustment Entries": "Adjustment Entries",
            "Adjustment Entries": "Adjustment Entries",
            "SCHD_DetailId": "SCHD_DetailId",
            "SCHD_MasterId": "SCHD_MasterId",
            "Master Name": "Master Name",
            "Ref Doc Details": "Ref Doc Details",
            "Amount": "Amount",
            "InProcess": "InProcess",
            "Already Adjusted":"Already Adjusted",
            "Already Adjusted":"Adjustment Details",

            // Add more translations for English here
        },

        "hi": {
                        "Vocher No": "वोचर नं",
            "Schedule Transaction": "लेन-देन अनुसूची",
            "Reference Entries": "संदर्भ प्रविष्टियाँ",
            "Schedule": "लेन-देन",
            "Back": "पीछे",
            "Account Head": "खाता हेड",
            "Voucher No": "वाउचर नंबर",
            "Voucher Amount": "वाउचर राशि",
            "Voucher Date": "वाउचर तिथि",
            "Narration": "वर्णन",
            "Vendor": "विक्रेता",
            "Apply": "लागू करें",
            "Save": "सहेजें",
            "Delete": "हटाएं",
            "Add": "जोड़ें",
            "Licensee Profile Details": "लाइसेंसी प्रोफ़ाइल विवरण",
            "Transaction Type:": "लेन-देन प्रकार:",
            "Reference Details": "संदर्भ विवरण",
            "Ref Doc No": "संदर्भ दस्तावेज नंबर",
            "Ref Doc Date": "संदर्भ दस्तावेज तिथि",
            "Amount": "राशि",
            "Entries": "एंट्रीज़",
            "Originating Amount:": "मूल राशि:",
            "SCHD_DetailId": "SCHD_DetailId",
            "SCHD_MasterId": "SCHD_MasterId",
            "Ref Doc Details": "संदर्भ दस्तावेज़ विवरण",
            "Party": "पक्ष",
            "SCHD_PendingAmount": "SCHD_PendingAmount",
            "Adjustment Amount:": "समायोजन राशि:",
            "TransId:": "TransId:",
            "Select": "चुनें",
            "Ref Details": "संदर्भ विवरण",
            "InProcess": "प्रक्रिया में",
            "Already Adjusted": "पहले से समायोजित",
            "Current Adjustment": "वर्तमान समायोजन",
            "Adjustment Entries": "समायोजन एंट्रीज़",
            "Master Name": "मास्टर नाम",
             "Ref Doc Details": "संदर्भ दस्तावेज़ विवरण",
            "Amount": "राशि",
            "InProcess": "प्रक्रिया में",
            "Already Adjusted": "पहले से समायोजित",
                        "Adjustment Details":"समायोजन विवरण",

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

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
            "Debit": "Debit",
            "Credit": "Credit",
            "Schedule": "Schedule",
            "Actions": "Actions",

          

            // Add more translations for English here
        },

        "hi": {

            "Journal Voucher Transaction": "जर्नल वाउचर लेन-देन",
            "JV Number": "जेवी नंबर",
            "JV Date": "जेवी तिथि",
            "Manual JV Number": "मैन्युअल जर्नल वाउचर नंबर",
            "JV Amount": "जेवी राशि",
            "JV Narration": "जेवी व्याख्या",
            "Account Code": "खाता कोड",
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

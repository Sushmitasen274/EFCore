$(document).ready(function () {
    var translations = {
        "en": {
            "Journal Voucher Transaction": "Journal Voucher Transaction",
            "Add New Jv": "Add New Jv",
            "JV Date": "JV Date",
            "JV Number": "JV Number",
            "Narration": "Narration",
            "Amount": "Amount",
            "Source": "Source",
            "History": "History",
            "Actions": "Actions",
            "Status": "Status",

            // Add more translations for English here
        },

        "hi": {

            "Journal Voucher Transaction": "जर्नल वाउचर लेन-देन",
            "Add New Jv": "नया जेवी जोड़ें",
            "JV Date": "जेवी तिथि",
            "JV Number": "जेवी नंबर",
            "Narration": "व्याख्या",
            "Amount": "राशि",
            "Source": "स्रोत",
            "History": "इतिहास",
            "Actions": "कार्रवाई",
                        "Status": "स्थिति",

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

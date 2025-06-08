$(document).ready(function () {
    var translations = {
        "en": {
            "Credit Note": "Credit Note",
            "Credit Note No": "Credit Note No",
            "Date": "Date",
            "Narration": "Narration",
            "Invoice Due Date": "Invoice Due Date",
            "Total PV Amount": "Total PV Amount",
            "Net PV Amount": "Net PV Amount",
            "History": "History",
            "Status": "Status",
            "Actions": "Actions",
            "New Credit Note": "New Credit Note",
            // Add more translations for English here
        },

        "hi": {
            "Credit Note": "क्रेडिट नोट",
            "Credit Note No": "क्रेडिट नोट संख्या",
            "Date": "तारीख",
            "Narration": "विवरण",
            "Invoice Due Date": "चालान की देय तिथि",
            "Total PV Amount": "कुल पीवी राशि",
            "Net PV Amount": "नेट पीवी राशि",
            "History": "इतिहास",
            "Status": "स्थिति",
            "Actions": "क्रियाएँ",
            "New Credit Note": "नया क्रेडिट नोट"
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

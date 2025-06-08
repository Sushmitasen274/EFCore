$(document).ready(function () {
    var translations = {
        "en": {
            "Debit Note": "Debit Note",
            "DebitNote": "DebitNote",
            "Date": "Date",
            "Narration": "Narration",
            "Total PV Amount": "Total PV Amount",
            "Net PV Amount": "Net PV Amount",
            "History": "History",
            "Status": "Status",
            "Actions": "Actions",
            "New Debit Note": "New Debit Note"

            // Add more translations for English here
        },

        "hi": {
            "Debit Note": "डेबिट नोट",
            "DebitNote": "डेबिट नोट",
            "Date": "तारीख",
            "Narration": "विवरण",
            "Total PV Amount": "कुल पीवी राशि",
            "Net PV Amount": "नेट पीवी राशि",
            "History": "इतिहास",
            "Status": "स्थिति",
            "Actions": "क्रियाएँ",
            "New Debit Note": "नया डेबिट नोट"
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

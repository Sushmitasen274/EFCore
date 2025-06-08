$(document).ready(function () {
    var translations = {
        "en": {
            "Year Master": "Year Master",
            "From Date": "From Date",
            "To Date": "To Date",
            "Financial Year": "Financial Year",
            "Is Current Year?": "Is Current Year?",
            "Save": "Save",
            "Reset": "Reset",
             "Back": "Back",
            // Add more translations for English here
        },

        "hi": {
            "Year Master": "वर्ष मास्टर",
            "From Date": "दिनांक से",
            "To Date": "दिनांक तक",
            "Financial Year": "वित्तीय वर्ष",
            "Is Current Year?": "क्या यह वर्तमान वर्ष है?",
            "Save": "सहेजें",
            "Reset": "रीसेट",
            "Back": "पीछे",

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

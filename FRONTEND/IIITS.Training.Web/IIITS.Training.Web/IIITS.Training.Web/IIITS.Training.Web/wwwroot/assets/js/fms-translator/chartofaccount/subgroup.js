$(document).ready(function () {
    var translations = {
        "en": {
            "Sub Group Details": "Sub Group Details",
            "Group Code": "Group Code",
            "Code": "Code",
            "Description": "Description",
            "Note": "Note",
            "Save": "Save",
             "Close": "Close",
            // Add more translations for English here
        },

        "hi": {
            "Sub Group Details": "उप समूह विवरण",
            "Group Code": "समूह कोड",
            "Code": "कोड",
            "Description": "विवरण",
            "Note": "नोट",
            "Save": "सहेजें",
             "Close": "बंद करना",

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

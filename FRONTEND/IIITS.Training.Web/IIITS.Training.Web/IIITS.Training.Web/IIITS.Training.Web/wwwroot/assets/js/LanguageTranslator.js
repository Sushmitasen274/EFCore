$(document).ready(function () {
    var translations = {
        "en": {
            "Username:": "Username:",
            "Save": "Save",
            "Year": "Year",
            "Validate": "Validate",
            "AreaName":"AreaName"
            // Add more translations for English here
        },




        "hi": {
            "Username:": "उपयोगकर्ता नाम:",
            "Save": "सेव करें",
            "Year": "साल",
            "Validate": "मान्य",
            "AreaName":"क्षेत्र का नाम"
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
        var selectedLanguage = $("input[name='language']:checked").val();
        translateLabels(selectedLanguage);
    });

    // Initial translation
    var initialLanguage = $("input[name='language']:checked").val();
    translateLabels(initialLanguage);
});

$(document).ready(function () {
    var translations = {
        "en": {
            "Schedule Report": "Schedule Report",
            "Account Code": "Account Code",
            " Month-Year": " Month-Year",
            "Vendor": "Vendor",
            "Print PDF": "Print PDF",
            "Print Excel": "Print Excel",
            "Back": "Back",

            // Add more translations for English here
        },

        "hi": {
            "Schedule Report": "अनुसूची रिपोर्ट",
            "Account Code": "खाता कोड",
            " Month-Year": " महीना-वर्ष",
            "Vendor": "विक्रेता", 
             "Print PDF": "प्रिंट पीडीएफ",
             "Print Excel": "प्रिंट एक्सेल",
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

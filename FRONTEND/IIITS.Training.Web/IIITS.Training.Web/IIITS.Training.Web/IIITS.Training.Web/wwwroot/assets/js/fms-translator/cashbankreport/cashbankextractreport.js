$(document).ready(function () {
    var translations = {
        "en": {
            "Cash/Bank Book": "Cash/Bank Book",
            "Account Code": "Account Code",
            "From Date": "From Date",
            "To Date": "To Date",
            "Print PDF": "Print PDF",
            "Print Excel": "Print Excel",
            "Back": "Back",
            "Cash/Bank Book Extract": "Cash/Bank Book Extract",
            "View Report": "View Report",
            // Add more translations for English here
        },

        "hi": {
            "Cash/Bank Book": "कैश/बैंक बुक",
            "Account Code": "खाता कोड",
            "From Date": "तिथि से",
            "To Date": "तिथि तक",
            "Print PDF": "प्रिंट पीडीएफ",
            "Print Excel": "प्रिंट एक्सेल",
             "Back": "पीछे",
            "Cash/Bank Book Extract": "कैश/बैंक बुक एक्स्ट्रैक्ट",
            "View Report": "रिपोर्ट देखें",

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

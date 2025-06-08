$(document).ready(function () {
    var translations = {
        "en": {
            "From Month-Year": "From Month-Year",
            "To Month-Year": "To Month-Year",
            "Back": "Back",
            "Print PDF": "Print PDF",
            "Print Excel": "Print Excel",
            "Journal Voucher Abstract": "Journal Voucher Abstract",
            "View Report": "View Report"
            // Add more translations for English here
        },

        "hi": {
            "From Month-Year": "माह-वर्ष से",
            "To Month-Year": "माह-वर्ष तक",
            "Back": "वापस",
             "Print PDF": "प्रिंट पीडीएफ",
             "Print Excel": "प्रिंट एक्सेल",
            "Journal Voucher Abstract": "जर्नल वाउचर सार",
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

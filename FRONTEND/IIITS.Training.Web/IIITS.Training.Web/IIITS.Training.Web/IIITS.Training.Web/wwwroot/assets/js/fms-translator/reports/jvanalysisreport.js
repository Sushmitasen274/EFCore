$(document).ready(function () {
    var translations = {
        "en": {
            "Form Month-Year": "Form Month-Year",
            "To Month-Year": "To Month-Year",
            "Print PDF": "Print PDF",
            "Print Excel": "Print Excel",
            "Back": "Back",
            "Journal Voucher Analysis": "Journal Voucher Analysis",
            "View Report": "View Report",
            // Add more translations for English here
        },

        "hi": {
           "Form Month-Year": "रूप माह-वर्ष",
           "To Month-Year": "माह-वर्ष तक",
            "Print PDF": "प्रिंट पीडीएफ",
            "Print Excel": "प्रिंट एक्सेल",
            "Back": "पीछे",
            "Journal Voucher Analysis": "जर्नल वाउचर विश्लेषण",
            "View Report": "रिपोर्ट देखें"
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

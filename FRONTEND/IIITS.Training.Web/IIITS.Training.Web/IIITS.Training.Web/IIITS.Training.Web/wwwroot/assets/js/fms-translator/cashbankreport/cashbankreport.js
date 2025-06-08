$(document).ready(function () {
    var translations = {
        "en": {
            "Cash/Bank Book Voucher": "Cash/Bank Book Voucher",
            "From Month-Year": "From Month-Year",
            "To Month-Year": "To Month-Year",
            "Status:": "Status:",
            "CB Voucher": "CB Voucher",
            "Print PDF": "Print PDF",
            "Print Excel": "Print Excel",
            "Back": "Back",
            "From Month": "From Month",
            "To Month": "To Month",
            "View Report": "View Report"
            // Add more translations for English here
        },

        "hi": {
            "Cash/Bank Book Voucher": "कैश/बैंक बुक वाउचर",
            "From Month-Year": "महीना-वर्ष से",
            "To Month-Year": "महीना-वर्ष तक",
            "Status:": "स्थिति:",
            "CB Voucher": "सीबी वाउचर",
            "Print PDF": "प्रिंट पीडीएफ",
            "Print Excel": "प्रिंट एक्सेल",
            "Back": "पीछे",
            "From Month": "महीना से",
            "To Month": "महीना तक",
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

$(document).ready(function () {
    var translations = {
        "en": {
            "General Ledger": "General Ledger",
            "Back": "Back",
            "From Month-Year": "From Month-Year",
            "To Month-Year": "To Month-Year",
            "Report Type:": "Report Type",
            "From Account Code": "From Account Code",
            "To Account Code": "To Account Code",
            "Print PDF": "Print PDF",
            "Print Excel": "Print Excel",
            "View Report": "View Report"
            // Add more translations for English here
        },




        "hi": {
            "General Ledger": "सामान्य लेजर",
            "Back": "पीछे",
            "From Month-Year": "महीना-वर्ष से",
            "To Month-Year": "महीना-वर्ष तक",
            "Report Type:": "रिपोर्ट प्रकार",
            "From Account Code": "खाता कोड से",
            "To Account Code": "खाता कोड तक",
            "Print PDF": "पीडीएफ प्रिंट करें",
            "Print Excel": "एक्सेल प्रिंट करें",
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

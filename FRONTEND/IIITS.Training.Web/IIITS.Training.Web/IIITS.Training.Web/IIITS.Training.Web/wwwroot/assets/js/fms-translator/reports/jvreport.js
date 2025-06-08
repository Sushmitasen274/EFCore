$(document).ready(function () {
    var translations = {
        "en": {
            "Back": "Back",
            "Form Month-Year": "Form Month-Year",
            "To Month-Year": "To Month-Year",
            "Status": "Status",
            "JV Number": "JV Number",
            "Load Report": "Load Report",
            "Print PDF": "Print PDF",
            "Print Excel": "Print Excel",
            "Journal Voucher Report": "Journal Voucher Report",
          

            // Add more translations for English here
        },

        "hi": {
            "Back": "वापस",
            "Form Month-Year": "माह-वर्ष से",
            "To Month-Year": "माह-वर्ष तक",
            "Status": "स्थिति",
            "JV Number": "जेवी नंबर",
            "Load Report": "लोड रिपोर्ट",
            "Print PDF": "प्रिंट पीडीएफ",
            "Print Excel": "प्रिंट एक्सेल",
            "Journal Voucher Report": "जर्नल वाउचर रिपोर्ट",

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

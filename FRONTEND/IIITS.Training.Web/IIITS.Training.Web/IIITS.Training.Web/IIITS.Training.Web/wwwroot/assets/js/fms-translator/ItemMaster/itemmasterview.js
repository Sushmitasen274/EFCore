$(document).ready(function () {
    var translations = {
        "en": {
            "Item Master": "Item Master",
            "Create": "Create",
            "Item Name": "Item Name",
            "Item Code": "Item Code",
            "Item Description": "Item Description",
            "Item Reference Number": "Item Reference Number",
            "Status": "Status",
            "Action": "Action"
            // Add more translations for English here
        },

        "hi": {
            "Item Master": "आइटम मास्टर",
            "Create": "बनाएं",
            "Item Name": "आइटम का नाम",
            "Item Code": "आइटम कोड",
            "Item Description": "आइटम विवरण",
            "Item Reference Number": "आइटम संदर्भ संख्या",
            "Status": "स्थिति",
            "Action": "कार्रवाई"
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

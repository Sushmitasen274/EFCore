$(document).ready(function () {
    var translations = {
        "en": {
            "COA Description": "COA Description",
            "Account Type": "Account Type",
            "Bank Name": "Bank Name",
            "Account No.": "Account No.",
            "IFSC Code": "IFSC Code",
            "Allow OD": "Allow OD",
            "OD Amount": "OD Amount",
            "Actions": "Actions",
            "Bank Master":"Bank Master",
            "Add Bank":"Add Bank",

          

            // Add more translations for English here
        },

        "hi": {
            "COA Description": "सीओए विवरण",
            "Account Type": "खाता प्रकार",
            "Bank Name": "बैंक का नाम",
            "Account No.": "खाता संख्या",
            "IFSC Code": "आईएफएससी कोड",
            "Allow OD": "ओवर ड्राफ्ट की अनुमति",
            "OD Amount": "ओवर ड्राफ्ट राशि",
            "Actions": "कार्रवाई",
            "Bank Master": "बैंक मास्टर",
            "Add Bank": "बैंक जोड़ें",
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

$(document).ready(function () {
    var translations = {
        "en": {
            "Locations": "Locations",
            "Bank Linkage": "Bank Linkage",
            "COA": "COA",
            "Account Type": "Account Type",
            "Bank Name": "Bank Name",
            "Account No.": "Account No.",
            "Account No.": "Account No.",
            "IFSC Code": "IFSC Code",
            "Address": "Address",
            "Address": "Address",
            "Allow OD": "Allow OD",
            "Over Draft Amount": "Over Draft Amount",
            "Save": "Save",
            "Back": "Back",
            // Add more translations for English here
        },

        "hi": {
            "Locations": "स्थान",
            "Bank Linkage": "बैंक संपर्क",
            "COA": "सीओए",
            "Account Type": "खाता प्रकार",
            "Bank Name": "बैंक का नाम",
            "Account No.": "खाता संख्या",
            "IFSC Code": "आईएफएससी कोड",
            "Address": "पता",
            "Allow OD": "ओवर ड्राफ्ट की अनुमति दें",
            "Over Draft Amount": "ओवर ड्राफ्ट राशि",
            "Save": "सहेजें",
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

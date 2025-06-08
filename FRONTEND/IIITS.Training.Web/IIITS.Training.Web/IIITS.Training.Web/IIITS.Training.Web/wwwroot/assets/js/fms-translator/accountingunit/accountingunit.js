$(document).ready(function () {
    var translations = {
        "en": {
            "Back": "Back",
            "Accounting Unit": "Accounting Unit",
            "Account Unit Code": "Account Unit Code",
            "Account Unit Name": "Account Unit Name",
            "Contact Person": "Contact Person",
            "Contact No": "Contact No",
            "Email Id": "Email Id",
            "Link To Location": "Link To Location",
             "Save": "Save",
            "Reset": "Reset",
            "Address": "Address",

          

            // Add more translations for English here
        },

        "hi": {
            "Back": "पीछे",
            "Accounting Unit": "लेखा इकाई",
            "Account Unit Code": "खाता इकाई कोड",
            "Account Unit Name": "खाता इकाई नाम",
            "Contact Person": "संपर्क व्यक्ति",
            "Contact No": "संपर्क नंबर",
            "Email Id": "ईमेल आईडी",
            "Link To Location": "स्थान के लिंक",
            "Save": "सहेजें",
            "Reset": "रीसेट",
            "Address": "पता",

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

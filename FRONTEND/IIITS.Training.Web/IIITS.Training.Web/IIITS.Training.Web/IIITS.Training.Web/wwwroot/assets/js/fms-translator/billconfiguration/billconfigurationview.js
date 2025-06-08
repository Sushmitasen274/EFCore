$(document).ready(function () {
    var translations = {
        "en": {
            "Bill Configuration": "Bill Configuration",
            "New Bill Configuration": "New Bill Configuration",
            "ACPkid": "ACPkid",
            "Type": "Type",
            "Account Code": "Account Code",
            "Is Fund Request": "Is Fund Request",
            "Percentage / Flat": "Percentage / Flat",
            "% / ₹": "% / ₹",
            "From Date": "From Date",
            "To Date": "To Date",
            "Action": "Action",
            "Bill Configuration type": "Bill Configuration type",
            // Add more translations for English here
        },

        "hi": {
            "Bill Configuration": "बिल कॉन्फ़िगरेशन",
            "New Bill Configuration": "नई बिल कॉन्फ़िगरेशन",
            "ACPkid": "एसीपीके आईडी",
            "Type": "प्रकार",
            "Account Code": "खाता कोड",
            "Is Fund Request": "निधि अनुरोध है",
            "Percentage / Flat": "प्रतिशत / सीधी",
            "% / ₹": "% / ₹",
            "From Date": "तारीख से",
            "To Date": "तारीख तक",
            "Action": "कार्रवाई",
            "Bill Configuration type": "बिल कॉन्फ़िगरेशन प्रकार"

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

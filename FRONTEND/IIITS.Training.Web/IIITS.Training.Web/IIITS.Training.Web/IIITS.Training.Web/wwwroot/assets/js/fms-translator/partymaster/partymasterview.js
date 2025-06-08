$(document).ready(function () {
    var translations = {
        "en": {
            "Party Master": "Party Master",
            "Party Type": "Party Type",
            "Local /Central": "Local /Central",
            "Party Code": "Party Code",
            "Party Name": "Party Name",
            "Location": "Location",
            "State": "State",
            "GST No.": "GST No.",
            "PAN No.": "PAN No.",
            "Mobile No": "Mobile No",
            "Action":"Action",
            "Create":"Create",
            // Add more translations for English here
        },

        "hi": {

            "Party Master": "पार्टी मास्टर",
            "Party Type": "पार्टी प्रकार",
            "Local /Central": "स्थानीय / केंद्रीय",
            "Party Code": "पार्टी कोड",
            "Party Name": "पार्टी का नाम",
            "Location": "स्थान",
            "State": "राज्य",
            "GST No.": "जीएसटी नंबर",
            "PAN No.": "पैन नंबर",
            "Mobile No": "मोबाइल नंबर",
            "Action": "कार्रवाई",
            "Create": "बनाएं",
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

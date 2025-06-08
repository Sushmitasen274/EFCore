$(document).ready(function () {
    var translations = {
        "en": {
            "Group Code": "Group Code",
            "Sub-Group Code": "Sub-Group Code",
            "Code": "Code",
            "Description": "Description",
            "Balance Type": "Balance Type",
            "Is IUA": "Is IUA",
            "Cash/Bank/GL": "Cash/Bank/GL",
            "Bal Type": "Bal Type",
            "Interface": "Interface",
            "Pertaining Master": "Pertaining Master",
            "Clearance": "Clearance",
            "Budget": "Budget",
            "Note": "Note",
            "Effect From Year": "Effect From Year",
            "Status": "Status",
            "Active/DeActive Remarks": "Active/DeActive Remarks",
            "Save": "Save",
            "Close":"Close",
            "GL Details":"GL Details",
            "Active":"Active",
            "Deactive":"Deactive",
            // Add more translations for English here
        },

        "hi": {
            "Group Code": "समूह कोड",
            "Sub-Group Code": "उप-समूह कोड",
            "Code": "कोड",
            "Description": "विवरण",
            "Balance Type": "संतुलन प्रकार",
            "Is IUA": "क्या IUA है",
            "Cash/Bank/GL": "नकद/बैंक/जीएल",
            "Bal Type": "बाल प्रकार",
            "Interface": "इंटरफेस",
            "Pertaining Master": "संबंधित मास्टर",
            "Clearance": "स्पष्टीकरण",
            "Budget": "बजट",
            "Note": "नोट",
            "Effect From Year": "वर्ष से प्रभाव",
            "Status": "स्थिति",
            "Active/DeActive Remarks": "सक्रिय/निष्क्रिय टिप्पणियाँ",
            "Save": "सहेजें",
            "Close": "बंद करें",
            "GL Details": "जीएल विवरण",
            "Active": "सक्रिय",
            "Deactive": "अक्रिय",

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

$(document).ready(function () {
    var translations = {
        "en": {
            "Chart of Accounts": "Chart of Accounts",
            "Root": "Root",
            "Group Details": "Group Details",
            "Code": "Code",
            "Classification": "Classification",
            "Description": "Description",
            "Part Indicator": "Part Indicator",
            "Note": "Note",
            "Sub Group Details": "Sub Group Details",
            "Cash/Bank/GL":"Cash/Bank/GL",
            "List of Chart Of Accounts":"List of Chart Of Accounts",
            "Selected Details":"Selected Details",
            "Add New Group":"Add New Group",
            "Add New Sub-Group":"Add New Sub-Group",
            "Add New GL":"Add New GL",
            "GL Details":"GL Details",
            "Active":"Active",
            "Deactive":"Deactive",
            "Bal Type": "Bal Type",
            "Interface": "Interface",
            "Chart of Accounts": "Chart of Accounts",
            "Export To Excel":"Export To Excel"
            // Add more translations for English here
        },

        "hi": {
            "Accounting Unit": "लेखा इकाई",
            "Root": "रूट",
            "Code": "कोड",
            "Group Details": "समूह विवरण",
            "Classification": "वर्गीकरण",
            "Description": "विवरण",
            "Part Indicator": "भाग संकेतक",
            "Note": "नोट",
            "Sub Group Details": "उप समूह विवरण",
            "Cash/Bank/GL": "नकद/बैंक/जीएल",
            "List of Chart Of Accounts": "खातों के चार्ट की सूची",
            "Selected Details": "खातों के चार्ट की सूची",
            "Add New Group": "नया समूह जोड़ें",
            "Add New Sub-Group": "नया उप-समूह जोड़ें",
            "Add New GL": "नया जीएल जोड़ें",
            "GL Details": "जीएल विवरण",
            "Active": "सक्रिय",
            "Deactive": "अक्रिय",
            "Bal Type": "बाल प्रकार",
            "Interface": "इंटरफेस",
            "Chart of Accounts": "लेखा खातों की सूची",
            "Export To Excel": "एक्सेल में निर्यात करें",
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
